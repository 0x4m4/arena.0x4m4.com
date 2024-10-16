## Introduction to PWN

PWN, derived from the word "own" or "pwn3d," refers to the act of exploiting vulnerabilities in a system or program to gain unauthorized control over it. This skill is crucial in offensive security, particularly in areas like penetration testing and Capture the Flag (CTF) competitions. Mastering PWN requires a deep understanding of computer systems, low-level programming, and memory management.

### Why Learn Binary Exploitation?
Binary exploitation is the art of manipulating vulnerabilities in compiled programs to achieve arbitrary code execution or privilege escalation. It often involves reverse engineering and in-depth knowledge of operating system internals.

---

## Key Concepts

1. **Buffer Overflow**:
   - A buffer overflow occurs when a program writes more data to a buffer (temporary storage area) than it can handle, leading to overwriting adjacent memory.
   - **Types of Buffer Overflows**:
     - **Stack-based**: Overflows the call stack, often allowing code execution by overwriting return addresses.
     - **Heap-based**: Exploits dynamic memory allocation issues to overwrite function pointers or other critical data.

2. **Shellcode**:
   - A small piece of code used as a payload in exploitation, typically designed to give an attacker a shell (command-line access) to the system.
   - **Writing Shellcode**: Shellcode is often written in assembly language for minimal size and maximal control over system behavior.

3. **Return-Oriented Programming (ROP)**:
   - ROP is a technique used to execute code by chaining together small instruction sequences already present in memory. These "gadgets" end with a return instruction, allowing attackers to bypass security mechanisms like DEP (Data Execution Prevention).

4. **Memory Corruption**:
   - Refers to bugs that allow unauthorized modification of memory content, leading to arbitrary code execution or system crashes. Common memory corruption vulnerabilities include use-after-free, double-free, and format string vulnerabilities.

---

## Common Vulnerabilities Exploited in PWN

1. **Stack-based Buffer Overflow**:
   - This is one of the most commonly exploited vulnerabilities. Attackers can overwrite the return address of a function to redirect program execution.
   
2. **Heap Exploitation**:
   - Targets vulnerabilities in dynamically allocated memory, typically involving heap corruption. Attacks like heap spraying or overwriting control structures (e.g., vtables, function pointers) are common in heap exploitation.

3. **Format String Vulnerabilities**:
   - Occur when user-controlled data is passed as the format specifier in functions like `printf`. This allows reading from or writing to arbitrary memory locations.

4. **Use-After-Free (UAF) and Double-Free**:
   - These vulnerabilities occur when a program frees memory that is still in use (use-after-free) or frees the same memory twice (double-free), leading to unintended consequences such as arbitrary code execution.

---

## Tools for Binary Exploitation

- **GDB (GNU Debugger)**: A powerful tool for debugging programs, which allows you to inspect memory, set breakpoints, and step through execution.
- **pwntools**: A Python library designed for rapid exploitation development. It simplifies tasks like interacting with remote services, crafting payloads, and debugging.
- **Radare2**: A highly versatile reverse engineering framework that includes disassemblers and debuggers.
- **ROPgadget**: A tool that helps identify ROP gadgets in binary files, making it easier to build ROP chains.
- **Ghidra/IDA Pro**: Advanced disassembly tools used for reverse engineering binaries to analyze their structure and behavior.

---

## Practical Binary Exploitation

### Example: Exploiting a Basic Stack Overflow
1. **Analyzing the Vulnerability**: Use GDB to analyze the program’s flow and locate buffer overflows.
   - Set a breakpoint where input is handled.
   - Step through execution and inspect the stack.
   
2. **Creating an Exploit**:
   - Overwrite the return address with a crafted payload using tools like `pwntools`.
   - Inject shellcode to gain control over the system.
   
3. **Bypassing Protections**:
   - **ASLR (Address Space Layout Randomization)**: Randomizes the memory address space to prevent predictable exploits. Techniques like leaking addresses can be used to bypass ASLR.
   - **NX (Non-Executable)**: Prevents execution of injected shellcode. ROP techniques can be used to bypass this protection.

---

## Challenges in Exploitation

While developing exploits, you may face several challenges:

- **Memory Protections**: Modern systems implement various protections like ASLR, DEP, and stack canaries, making exploitation more difficult.
- **Exploit Development**: Even if a vulnerability is discovered, turning it into a working exploit requires creativity and technical expertise, particularly in bypassing multiple layers of defense.

---

## CTF (Capture the Flag) and PWN Challenges

In CTF competitions, PWN challenges test your ability to exploit binary vulnerabilities. Common tasks include:
- Exploiting a simple buffer overflow to execute shellcode.
- Building ROP chains to bypass protections.
- Performing heap exploitation in complex scenarios.

Popular CTF platforms for practicing binary exploitation:
- **Hack The Box**: Offers a range of exploitation challenges for learners of all levels.
- **TryHackMe**: A beginner-friendly platform with guided exploitation labs.
- **picoCTF**: Aimed at high school students, offering a good starting point for beginners.

---

## Learning Resources

To further enhance your PWN skills, here are some great resources:
- **Books**: "Hacking: The Art of Exploitation" by Jon Erickson is an excellent resource for learning about binary exploitation.
- **Blogs**: Following security researchers' blogs (e.g., LiveOverflow, Trail of Bits) can provide up-to-date techniques and real-world examples.
- **Courses**: Websites like Cybrary, Udemy, and Coursera offer courses in binary exploitation and ethical hacking.
- **Practice Platforms**: CTF platforms like Hack The Box, TryHackMe, and OverTheWire offer opportunities to practice your skills in a safe, legal environment.

## Pwn College:
- [Pwn.College](https://pwn.college/)

## Sources:

---

### TryHackMe Paths:

#### Privilege Escalation (PrivEsc)
- [TryHackMe | Linux Privilege Escalation](https://tryhackme.com/room/linprivesc)
- [TryHackMe | Linux PrivEsc](https://tryhackme.com/room/linuxprivesc)
- [TryHackMe | Linux PrivEsc Arena](https://tryhackme.com/room/linuxprivescarena)
- [TryHackMe | Windows PrivEsc](https://tryhackme.com/room/windows10privesc)
- [TryHackMe | Windows PrivEsc Arena](https://tryhackme.com/room/windowsprivescarena)
- [TryHackMe | Sudo Security Bypass](https://tryhackme.com/room/sudovulnsbypass)
- [TryHackMe | Sudo Buffer Overflow](https://tryhackme.com/room/sudovulnsbof)

#### Buffer Overflow
- [TryHackMe | Buffer Overflow Prep](https://tryhackme.com/room/bufferoverflowprep)
- [TryHackMe | Gatekeeper](https://tryhackme.com/room/gatekeeper)
- [TryHackMe | Chronicle](https://tryhackme.com/room/chronicle)
- [TryHackMe | Intro To Pwntools](https://tryhackme.com/room/introtopwntools)

---

### Platforms for Learning PWN (Binary Exploitation):

- [Hack The Box | PWN Challenges](https://www.hackthebox.com/)  
  Hack The Box offers a variety of binary exploitation challenges designed to help you practice PWN skills and exploit real-world vulnerabilities.
  
- [Root Me | PWN Challenges](https://www.root-me.org/?lang=en)  
  Root Me provides multiple binary exploitation challenges, including buffer overflows, format string exploits, and more.

- [picoCTF | Binary Exploitation](https://picoctf.org/)  
  picoCTF offers beginner-friendly binary exploitation challenges, making it an excellent starting point for learning buffer overflows and other PWN techniques.

---

### Tools for PWN (Binary Exploitation):

- [Pwntools](https://github.com/Gallopsled/pwntools)  
  A CTF framework and exploit development library, Pwntools is one of the most popular tools used in binary exploitation.

- [GDB (GNU Debugger)](https://www.gnu.org/software/gdb/)  
  A powerful debugger used to analyze programs at runtime. GDB is often paired with **GEF** or **Pwndbg** for enhanced binary exploitation.

- [Pwndbg](https://github.com/pwndbg/pwndbg)  
  A GDB plugin designed to assist with exploitation. It provides many utilities for binary analysis and exploitation during live debugging.

- [GEF (GDB Enhanced Features)](https://gef.readthedocs.io/en/master/)  
  An alternative to Pwndbg, GEF is a GDB plugin that provides advanced features for analyzing binaries during debugging.

- [ROPgadget](https://github.com/JonathanSalwan/ROPgadget)  
  A tool that helps you search for Return-Oriented Programming (ROP) gadgets, which are essential for bypassing security mechanisms like DEP (Data Execution Prevention).

- [Checksec](https://github.com/slimm609/checksec.sh)  
  A shell script to check the security of binaries. It shows which protections (like ASLR, NX, etc.) are enabled for an executable.

- [Binwalk](https://github.com/ReFirmLabs/binwalk)  
  A tool for analyzing and extracting files from binary images, commonly used to inspect firmware or embedded device binaries.

- [Radare2](https://github.com/radareorg/radare2)  
  A powerful reverse engineering and binary exploitation tool for analyzing, modifying, and debugging binaries.
