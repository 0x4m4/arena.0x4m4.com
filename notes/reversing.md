# Reversing

Reverse engineering is the process of analyzing a system or software to understand its internal structure, design, and functionality. In the context of cybersecurity, it's often used to understand malware, find vulnerabilities, or bypass security measures.

## Key Concepts

1. **Disassembly**: Converting machine code back into assembly language.
2. **Debugging**: Examining the program's execution step-by-step.
3. **Static Analysis**: Analyzing the code without running it.
4. **Dynamic Analysis**: Analyzing the code while it's running.

## Tools for Reversing

- **IDA Pro**: A powerful disassembler and debugger.
- **Ghidra**: An open-source software reverse engineering tool developed by NSA.
- **Radare2**: An open-source reverse engineering framework.
- **x64dbg**: An open-source x64/x32 debugger for Windows.

## Basic Steps in Reverse Engineering

1. **Obtain the binary**: Get the executable file you want to analyze.
2. **Static analysis**: Use a disassembler to view the assembly code.
3. **Dynamic analysis**: Run the program in a debugger to observe its behavior.
4. **Code analysis**: Understand the program's logic and functionality.
5. **Documentation**: Document your findings and understanding of the program.

## Example: Simple Crackme

Here's a simple C program that asks for a password:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char password[20];
    printf("Enter password: ");
    scanf("%19s", password);
    if (strcmp(password, "s3cr3t_p4ssw0rd") == 0) {
        printf("Access granted!\n");
    } else {
        printf("Access denied!\n");
    }
    return 0;
}
```

To reverse engineer this:

1. Compile the program and open it in a disassembler.
2. Look for string references to find the hidden password.
3. Analyze the comparison logic to understand how the password is checked.

Remember, always practice reverse engineering ethically and only on software you have permission to analyze!