# Cryptography

Cryptography is the practice and study of techniques for secure communication in the presence of adversaries. It's fundamental to computer and information security.

## Key Concepts

1. **Encryption**: The process of converting information into a secret code.
2. **Decryption**: The process of converting encrypted information back to its original form.
3. **Cipher**: An algorithm for performing encryption or decryption.
4. **Key**: A piece of information that determines the functional output of a cryptographic algorithm.

## Types of Cryptography

1. **Symmetric Key Cryptography**: Uses the same key for encryption and decryption.
   - Example: AES (Advanced Encryption Standard)

2. **Asymmetric Key Cryptography**: Uses different keys for encryption and decryption.
   - Example: RSA (Rivest–Shamir–Adleman)

3. **Hash Functions**: One-way functions that map data of arbitrary size to fixed-size values.
   - Example: SHA-256 (Secure Hash Algorithm 256-bit)

## Basic Cryptographic Challenge

Here's a simple substitution cipher in Python:

```python
def encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
        else:
            result += char
    return result

def decrypt(text, shift):
    return encrypt(text, -shift)

# Example usage
message = "Hello, World!"
shift = 3
encrypted = encrypt(message, shift)
decrypted = decrypt(encrypted, shift)

print(f"Original: {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")
```

This implements a simple Caesar cipher. Try to understand how it works and then implement your own decryption function without looking at the provided `decrypt` function!

Remember, while these simple ciphers are great for learning, they are not secure for real-world use. Always use well-vetted, modern cryptographic libraries for actual security needs.

