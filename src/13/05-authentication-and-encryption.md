# Authentication & Encryption

Mesh security relies heavily on authentication and encryption to identify legitimate users and keep protected data from being intercepted.

## Mesh ID

Your mesh ID is a unique identifier code that distinguishes you from every other user and device on the mesh. Your cranial computer or ecto automatically associates this ID address with your accounts and screen names, enabling you to receive messages and other transmissions. This ID is automatically generated each time you come online and required for almost all online interactions. These interactions are universally logged, leaving a data trail that can be used to track your activity ([Tracking](10-tracking.md)). Fortunately, [anonymizing services](../16/04-services.md#mesh-services) are available for those who value their privacy.

Many mesh IDs are publicly registered (and in some jurisdictions, this is legally mandated). Looking up a registered mesh ID is trivial. Registration data may include a name, physical address, and social media profile if so desired.

## Accounts & Access Privileges

To access any mesh device or service, you need an account. Your account links to your mesh ID and determines your access privileges — what you are allowed to see and do with the device/service. As some systems are more restrictive than others, the GM ultimately decides what privileges an account provides ([Mesh Actions](06-mesh-actions.md)). There are four types of accounts: public, user, security, and admin.

**Account Shell:** When you log onto a system, an account shell is created. This account shell is the user interface that allows you to interact with the system. This process represents your presence as you access the system. It may be attacked in [mesh combat](14-mesh-combat.md).

### Public Accounts

Public accounts provide access to anyone on the mesh. They do not require any type of authentication or login process — your mesh ID is enough. Public accounts let you browse mesh sites, forums, public archives, open databases, social networks, etc. Public accounts usually have the ability to view and download public data and sometimes write (forum comments, for example), but little else.

### User Accounts

User accounts require some form of [authentication](#authentication-methods) to access the device/service. These accounts are provided to people who regularly use the system: employees, clients, etc. Most users are allowed to use the system’s standard features as well as view, download, upload, and change their own or shared data. They are not allowed to create new accounts, access logs, alter security features, or do anything that might impact the system’s functions.

### Security Accounts

Security accounts are intended for security personnel and ALIs that watch over the system. They also require [authentication](#authentication-methods) but provide greater privileges than standard users. Security accounts can typically view and edit logs, command security features and ALIs, add/delete non-admin accounts, alter the data of other users, and so on.

### Admin Accounts

Admin accounts provide complete control (“root”) over the system. Admin privileges allow you to access and alter all of the features and data. They can do everything security accounts can, as well as alter access privileges of other accounts, shut down or reboot the system, stop and start any apps or services, and add or delete any software. Every system has one root admin account that cannot be deleted or lose its privileges; for implant and hardware devices, this root account usually belongs to the person they are embedded in.

## Authentication Methods

Most systems require some kind of authentication (a process by which a system determines whether the claimed identity of a user is genuine) before they will grant you an account and access privileges. There are multiple authentication methods a system can use (highly secure systems may require more than one). Though some are more secure than others, each has their own drawbacks.

### Biometric Scan

These systems scan one or more of your morph’s biometric signatures (fingerprint, palm print, retinal scan, DNA sample, etc.). Popular before the Fall, such systems have fallen out of use as they are impractical with synthmorphs or users that frequently resleeve.

### Ego Scan

This system authenticates the user’s [ego ID](../15/07-identity-systems.md#ego-id), verified with a brainwave scan. As it requires a hardwired and tamper-proof brainprint scanner, such systems are typically only found in highsecurity environments.

### Direct Neural Interface

If you have implants or embedded hardware, these are directly spliced into your nervous system, with the physical links themselves providing the authentication.

### Mesh ID

Some systems accept your mesh ID as authentication. This is extremely common with most public systems, which merely log the mesh ID of any user that wishes access. Other systems will only allow access to specific mesh IDs, but these are vulnerable to [spoofing attacks](#spoofing).

### Other Account

If you have access to an account on one system or service, and are logged in, this may give you automatic access to accounts on related systems or services. For example, having an account with a social network portal may give you free access to certain online news feeds or commercial data archives. This is also the method used for [puppeted devices](02-mesh-topology.md#puppeted-devices), where access to the master device automatically grants you access to its puppeted devices. Hackers favor going after master accounts as a way of accessing other systems.

### Passcode

The most common authentication method is the passcode — a string of alphanumeric characters or logographic symbols. Anyone with the passcode can access the account. Most passcodes are quite long (to deter brute-force cracking methods), and so are stored in an encrypted format in your mesh inserts.

### Passkey

Passkey systems call for an encrypted code that is either hardwired into a physical device (that is either implanted or physically jacked into an ecto) or extracted from specialized software. Advanced passkeys combine hardwired encryption with physical nanotech etching to create a unique key. To access such systems, the passkey must either be acquired or somehow spoofed.

### Quantum Key

QK systems rely on a passcode delivered on a quantum-entangled and encrypted channel. Due to their expense and logistics, these are rare, but highly secure.

## Circumventing Authentication

Since hacking or breaking encryption can be challenging or take time, it is sometimes easier to bypass authentication systems.

### Acquiring Credentials

If you can somehow acquire the passcode, passkey, biometrics, or quantum-entangled device used to authenticate an account, you can log in as a legitimate user, no tests necessary. This may require creative means to acquire: theft, blackmail, bribery, social engineering, forknapping, or unsavory methods like torture.

### Forging Authentication

Lacking actual credentials, you can try to fake them. Biometric and passkey systems can potentially be forged by hackers who are able to get a look at the originals. The means and techniques for doing so differ and are beyond the scope of this book, but successfully forging such systems would allow a hacker to log in as the legitimate user. At the least, forging should require multiple skill tests (for example, Infosec and Hardware: Electronics to extract a retinal print from a retinal scanner’s memory, and Medicine: Biotech to grow a duplicate eye) and lengthy timeframes.

### Spoofing

You can attempt to disguise your connection as if it came from a legitimate user or system. If successful, the recipient system is fooled by the charade and treats your commands and other traffic as legitimate.

To spoof signals, you must first successfully monitor an active connection between the two systems using a sniffer app ([Sniffing](04-devices-apps-and-links.md#sniffing)). Armed with this data, you can use it to mask your own signals with a spoofer app. This requires a complex action and a [Hacking Test](11-hacking.md#hacking-tests) between you and the target system (the one _receiving_ the signals). If the systems are communicating via a VPN, this test suffers a −30 modifier. If you win, your communications are treated as if coming from the legitimate system. If the firewall loses the contest but also succeeds, it is aware that there are discrepancies with the transmission (which is not that unusual). It may investigate further; this requires another Hacking Test (the spoofer suffers −30 against a VPN); if the defender wins, they detect evidence that incoming communications are being tampered with and may respond accordingly ([Countermeasures](12-countermeasures.md)).

Note that spoofing only allows you to fake signals from one system to another. To fake signals back the other way, you must succeed in a [Hacking Test](11-hacking.md#hacking-tests) against the other system as well. Successful man-in-the-middle attacks against both systems can be challenging but quite devastating.

## Encryption

There are two types of cryptography commonly used in Eclipse Phase: public key and quantum.

### Public-Key Crypto

In public-key cryptosystems, you generate two keys, a public key and a secret key. You give the public key to your friends or simply post it to the mesh at large. Others can use your public key to encrypt messages to you that only your secret key — controlled by you — can decrypt. Public-key crypto is widely used for encrypting files. Due to the strength of the public-key system algorithms, such crypto is essentially unbreakable without a quantum computer ([Quantum Codebreaking](#quantum-codebreaking)). Public-key crypto is also used in VPNs, but sniffer apps exploit flaws in the protocol implementation that enable them to capture, bypass, or spoof the crypto keys without actually cracking them.

### Quantum-Key Crypto

Quantum-key distribution systems use quantum mechanics to enable secure communications between two parties. The advantage to transmitting information in quantum states is that the system itself instantly detects eavesdropping attempts as quantum systems are disturbed by any sort of external interference. In practical terms, this means that quantum-encrypted data transfers are unbreakable and attempts to intercept automatically fail. Note that quantum crypto doesn’t work for basic file encryption, its only use is in protecting communication channels.

While quantum-key systems have an advantage over public-key systems, they are more expensive and less practical. To generate a quantum key, the two communications devices must be entangled together on a quantum level, in the same location, and then separated. This means that quantum-encrypted communications channels require some setup effort, especially if long distances are involved. As a result, quantum-crypto protocols are reserved for high-security communications links.

### Codebreaking

What this means is that public-key-encrypted files are somewhat safe and quantum-encrypted communications are absolutely safe. GMs should take note: this may be useful to PCs, but may also hinder them. If the PCs need to get at something that is encrypted, they may need to deploy non-hacking methods to get the secret key/passcode or find some way to bypass the encryption entirely.

### Quantum Codebreaking

Quantum computers can be used to break public-key encryption. This is an Infosec task action with a timeframe of 1 week. Once started, the quantum computer finishes the job on its own; you do not need to provide constant oversight. This process does not benefit from time-accelerated simulspaces. GMs should modify this timeframe to fit the needs of their game. Note that quantum computers cannot break quantum-encrypted communications, only public-key-encrypted files.
