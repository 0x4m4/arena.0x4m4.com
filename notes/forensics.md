
# Forensics - A Beginner's Guide

## Introduction to Digital Forensics

Digital forensics involves the recovery and investigation of material found in digital devices, often in the context of cybercrime. This field plays a crucial role in identifying, preserving, analyzing, and presenting digital evidence in legal cases. Forensics is essential for investigating data breaches, malware infections, and other cyber incidents.

### Why Learn Digital Forensics?
Digital forensics is a key component of cybersecurity incident response. Understanding how to recover and analyze evidence helps investigators trace attacks, uncover hidden information, and bring cybercriminals to justice.

---

## Key Concepts

1. **Data Recovery**:
   - The process of retrieving deleted, corrupted, or hidden data from digital storage devices, such as hard drives, USBs, or memory cards.

2. **Disk Imaging**:
   - Creating an exact copy (image) of a disk to preserve its data for forensic analysis without altering the original evidence.

3. **Memory Forensics**:
   - Analyzing volatile memory (RAM) to discover evidence of malware infections, encryption keys, and other sensitive information that disappears when a system is powered down.

4. **File Carving**:
   - Recovering files based on their signature patterns, even when metadata like filenames or file system references are missing.

---

## Tools for Digital Forensics

Several powerful tools are available for conducting digital forensic investigations:

- **Autopsy**: An open-source digital forensics platform that helps analyze hard drives, mobile phones, and other media.
- **FTK Imager**: A popular tool for creating disk images and analyzing files and directories.
- **Volatility**: A memory forensics tool that analyzes RAM dumps to identify running processes, network connections, and injected code.
- **Sleuth Kit**: A collection of command-line tools for analyzing disk images, recovering deleted files, and conducting forensic investigations.
- **Wireshark**: A network protocol analyzer used to capture and analyze network traffic for forensic purposes.

---

## Practical Digital Forensics

### Example: Disk Imaging and Analysis
1. **Creating a Disk Image**:
   - Use `dd` or FTK Imager to create a forensic image of a hard drive:
   - `dd if=/dev/sda of=disk.img bs=4M`
   
2. **Analyzing the Disk Image**:
   - Load the image into **Autopsy** or **Sleuth Kit** to recover files, analyze metadata, and find hidden data.

### Example: Memory Analysis with Volatility
1. **Acquiring a Memory Dump**:
   - Use a tool like `dumpit` or `FTK Imager` to create a memory dump of a running system.
   
2. **Analyzing Memory**:
   - Use Volatility to analyze the memory dump for signs of malware or to recover sensitive information:
   - `volatility -f memory.dmp --profile=Win7SP1x64 pslist`

---

## Challenges in Digital Forensics

Digital forensics can be complex due to the following challenges:

1. **Encryption**:
   - Attackers often use encryption to hide data. Bypassing or decrypting these files requires specialized tools and techniques.

2. **Anti-Forensic Techniques**:
   - Some malware and cybercriminals use anti-forensic techniques to erase logs, overwrite files, or hide data within obscure file formats.

3. **Chain of Custody**:
   - It's important to maintain a strict chain of custody to ensure that digital evidence is admissible in court. Any tampering or alteration can compromise the investigation.

---

## CTF and Forensics Challenges

In CTF competitions, forensics challenges often involve tasks such as recovering deleted files, analyzing packet captures, and examining memory dumps. Common tasks include:

- Recovering hidden or deleted files from disk images.
- Analyzing PCAP files using **Wireshark** to extract credentials or identify attacks.
- Performing memory forensics with **Volatility** to identify running malware or extract encryption keys.

Popular CTF platforms for practicing digital forensics include:

- **TryHackMe**: Offers guided forensics labs covering disk analysis, memory forensics, and network forensics.
- **Hack The Box**: Includes a variety of forensic challenges, from basic file recovery to advanced memory analysis.
- **picoCTF**: Provides beginner-friendly forensics challenges for students and enthusiasts.

---

## Learning Resources

To further enhance your digital forensics skills, here are some useful resources:

- **Books**: "Digital Forensics with Open Source Tools" by Cory Altheide and Harlan Carvey.
- **Online Courses**: Udemy and Coursera offer courses on digital forensics, incident response, and memory analysis.
- **Practice**: Use platforms like TryHackMe and Hack The Box to practice digital forensics in real-world scenarios.


## Sources:

---

## THM Paths:
## Forensics

---

- [TryHackMe | Linux Server Forensics](https://tryhackme.com/room/linuxserverforensics)
- [TryHackMe | Forensics](https://tryhackme.com/room/forensics)
- [TryHackMe | Memory Forensics](https://tryhackme.com/room/memoryforensics)
- [TryHackMe | Volatility](https://tryhackme.com/room/bpvolatility)
- [TryHackMe | Disk Analysis & Autopsy](https://tryhackme.com/room/autopsy2ze0)

## Malware Analysis

---

- [TryHackMe | History of Malware](https://tryhackme.com/room/historyofmalware)
- [TryHackMe | MAL: Malware Introductory](https://tryhackme.com/room/malmalintroductory)
- [TryHackMe | Basic Malware RE](https://tryhackme.com/room/basicmalwarere)
- [TryHackMe | MAL: Researching](https://tryhackme.com/room/malresearching)
- [TryHackMe | Mobile Malware Analysis](https://tryhackme.com/room/mma)
- [TryHackMe | Carnage](https://tryhackme.com/room/c2carnage)
- [TryHackMe | Dunkle Materie](https://tryhackme.com/room/dunklematerieptxc9)

---

## Tools for Forensics:

1. **Autopsy**  
   - [Autopsy](https://www.sleuthkit.org/autopsy/)  
   A powerful, open-source digital forensics tool for analyzing disk images, recovering files, and gathering evidence from data storage devices.
   
2. **Volatility**  
   - [Volatility](https://www.volatilityfoundation.org/)  
   An advanced memory forensics framework, commonly used for analyzing RAM dumps to uncover artifacts left behind in volatile memory.

3. **Wireshark**  
   - [Wireshark](https://www.wireshark.org/)  
   A network traffic analysis tool, essential for investigating network-based attacks and analyzing captured packets.

4. **FTK Imager**  
   - [FTK Imager](https://accessdata.com/product-download/ftk-imager)  
   A digital forensics acquisition tool used to capture disk images and analyze them for forensic artifacts.

5. **Binwalk**  
   - [Binwalk](https://github.com/ReFirmLabs/binwalk)  
   A tool for analyzing, extracting, and reverse-engineering firmware images and file systems often used in embedded devices.

6. **ExifTool**  
   - [ExifTool](https://exiftool.org/)  
   A command-line tool used to read and edit metadata in images, videos, and documents, essential for investigating hidden information in files.

7. **Bulk Extractor**  
   - [Bulk Extractor](https://digitalcorpora.org/downloads/bulk_extractor/)  
   A forensics tool used to extract useful information like URLs, email addresses, and other data from disk images, network packet captures, and other sources.

8. **Redline**  
   - [Redline](https://www.mandiant.com/resources/download/redline)  
   A free tool by Mandiant for endpoint memory and file analysis, primarily focused on detecting malicious activity and collecting memory artifacts.

9. **Sleuth Kit**  
   - [Sleuth Kit](https://www.sleuthkit.org/)  
   A collection of command-line tools used to analyze disk images and recover deleted files or extract data from corrupted systems.

10. **Caine**  
   - [Caine](https://www.caine-live.net/)  
   A Linux distribution that includes a wide range of forensics tools for analyzing systems, network traffic, and digital evidence.

---

## Online Tools:

1. **VirusTotal**  
   - [VirusTotal](https://www.virustotal.com/)  
   An online service that analyzes files and URLs to detect viruses, malware, and other threats by scanning with multiple antivirus engines.

2. **Hybrid Analysis**  
   - [Hybrid Analysis](https://www.hybrid-analysis.com/)  
   A malware analysis platform that provides detailed reports on files and URLs, offering insight into potential malicious behavior.

3. **Magnet Forensics**  
   - [Magnet Forensics](https://www.magnetforensics.com/)  
   Offers advanced tools for investigating digital evidence from computers, mobile devices, and cloud services.

4. **Rekall**  
   - [Rekall](http://www.rekall-forensic.com/)  
   A memory forensics framework that can analyze RAM dumps and extract data about running processes, network connections, and more.

---

## Websites to Learn Forensics:

1. **DFIR Training**  
   - [DFIR Training](https://www.dfir.training/)  
   Provides various resources, guides, and training modules related to digital forensics and incident response (DFIR).

2. **SANS Institute**  
   - [SANS Institute Digital Forensics](https://www.sans.org/cyber-security-courses/digital-forensics-incident-response-training/)  
   Offers comprehensive training programs for digital forensics and incident response with hands-on labs and practical cases.

3. **ForensicsWiki**  
   - [ForensicsWiki](https://forensicswiki.xyz/)  
   A collaborative space for sharing forensic tools, techniques, and case studies related to various aspects of digital forensics.

4. **Magnet Forensics Academy**  
   - [Magnet Forensics Academy](https://www.magnetforensics.com/forensics-training/)  
   Free and paid courses for learning digital forensics, covering topics like mobile forensics, disk analysis, and memory forensics.

5. **Udemy - Digital Forensics Courses**  
   - [Udemy - Digital Forensics](https://www.udemy.com/topic/digital-forensics/)  
   Udemy offers multiple courses focused on forensics investigation, covering tools like Autopsy, FTK, and other practical case studies.

6. **Cybrary - Digital Forensics & Incident Response (DFIR)**  
   - [Cybrary DFIR](https://www.cybrary.it/catalog/forensics/)  
   Offers both free and premium courses focusing on the various aspects of digital forensics, including memory and disk analysis.

7. **Certifications - GIAC Certified Forensic Examiner (GCFE)**  
   - [GIAC GCFE](https://www.giac.org/certification/certified-forensic-examiner-gcfe)  
   A certification for professionals who want to specialize in forensic investigation, primarily focusing on data from Windows systems.
