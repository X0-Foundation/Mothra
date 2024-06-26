// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <0.9.0;

/// @title Contains 512-bit math functions
/// @notice Facilitates multiplication and division that can have overflow of an intermediate value without any loss of precision
/// @dev Handles "phantom overflow" i.e., allows multiplication and division where an intermediate value overflows 256 bits
library FullMath {
  /// @notice Calculates floor(a×b÷q) with full precision. Throws if result overflows a uint or q == 0
  /// @param a The multiplicand
  /// @param b The multiplier
  /// @param q The divisor
  /// @return result The 256-bit result
  /// @dev Credit to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv
  function mulDiv(
    uint a,
    uint b,
    uint q
  ) internal pure returns (uint result) {
    unchecked {
      // 512-bit multiply [prod1 prod0] = a * b
      // Compute the product mod 2**256 and mod 2**256 - 1
      // then use the Chinese Remainder Theorem to reconstruct
      // the 512 bit result. The result is stored in two 256
      // variables such that product = prod1 * 2**256 + prod0
      uint prod0; // Least significant 256 bits of the product
      uint prod1; // Most significant 256 bits of the product
      assembly {
        let mm := mulmod(a, b, not(0))
        prod0 := mul(a, b)
        prod1 := sub(sub(mm, prod0), lt(mm, prod0))
      }

      // Handle non-overflow cases, 256 by 256 division
      if (prod1 == 0) {
        require(q > 0);
        assembly {
          result := div(prod0, q)
        }
        return result;
      }

      // Make sure the result is less than 2**256.
      // Also prevents q == 0
      require(q > prod1);

      ///////////////////////////////////////////////
      // 512 by 256 division.
      ///////////////////////////////////////////////

      // Make division exact by subtracting the remainder from [prod1 prod0]
      // Compute remainder using mulmod
      uint remainder;
      assembly {
        remainder := mulmod(a, b, q)
      }
      // Subtract 256 bit number from 512 bit number
      assembly {
        prod1 := sub(prod1, gt(remainder, prod0))
        prod0 := sub(prod0, remainder)
      }

      // Factor powers of two out of q
      // Compute largest power of two divisor of q.
      // Always >= 1.
      uint twos = (~q + 1) & q;
      // Divide q by power of two
      assembly {
        q := div(q, twos)
      }

      // Divide [prod1 prod0] by the factors of two
      assembly {
        prod0 := div(prod0, twos)
      }
      // Shift in bits from prod1 into prod0. For this we need
      // to flip `twos` such that it is 2**256 / twos.
      // If twos is zero, then it becomes one
      assembly {
        twos := add(div(sub(0, twos), twos), 1)
      }
      prod0 |= prod1 * twos;

      // Invert q mod 2**256
      // Now that q is an odd number, it has an inverse
      // modulo 2**256 such that q * inv = 1 mod 2**256.
      // Compute the inverse by starting with a seed that is correct
      // correct for four bits. That is, q * inv = 1 mod 2**4
      uint inv = (3 * q) ^ 2;
      // Now use Newton-Raphson iteration to improve the precision.
      // Thanks to Hensel's lifting lemma, this also works in modular
      // arithmetic, doubling the correct bits in each step.
      inv *= 2 - q * inv; // inverse mod 2**8
      inv *= 2 - q * inv; // inverse mod 2**16
      inv *= 2 - q * inv; // inverse mod 2**32
      inv *= 2 - q * inv; // inverse mod 2**64
      inv *= 2 - q * inv; // inverse mod 2**128
      inv *= 2 - q * inv; // inverse mod 2**256

      // Because the division is now exact we can divide by multiplying
      // with the modular inverse of q. This will give us the
      // correct result modulo 2**256. Since the precoditions guarantee
      // that the outcome is less than 2**256, this is the final result.
      // We don't need to compute the high bits of the result and prod1
      // is no longer required.
      result = prod0 * inv;
      return result;
    }
  }

  /// @notice Calculates ceil(a×b÷q) with full precision. Throws if result overflows a uint or q == 0
  /// @param a The multiplicand
  /// @param b The multiplier
  /// @param q The divisor
  /// @return result The 256-bit result
  function mulDivRoundingUp(
    uint a,
    uint b,
    uint q
  ) internal pure returns (uint result) {
    unchecked {
      result = mulDiv(a, b, q);
      if (mulmod(a, b, q) > 0) {
        require(result < type(uint).max);
        result++;
      }
    }
  }
}
