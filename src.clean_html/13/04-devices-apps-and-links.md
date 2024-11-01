# Devices, Apps, & Links

Behind the augmented reality, it is hardware and software that makes the mesh work.

## Hardware

While online, you’ll be accessing and interacting with numerous devices. This hardware falls into three categories: motes, hosts, and servers.

### Motes

The vast majority of meshed devices are motes: the wireless transceivers, microcomputers, and sensors embedded into almost everything. This includes appliances, tools, implants, sensors, wearables, peripherals, and similar specialized hardware. Motes possess enough processing power, storage memory, and networking capabilities to handle their specialized functions, mesh with nearby devices, and run a small assortment of apps.

Motes have only public and admin [accounts](05-authentication-and-encryption.md#accounts--access-privileges). They are only capable of running ALIs; some motes (GM’s call) can run infomorphs if the ALI is deleted, but they become overloaded.

### Hosts

A host is a generalized, multi-purpose personal computer, with significant processing and networking capabilities, designed to be operated by an end user. Hosts include mesh inserts, ectos, cyberbrains, tablets, ghostrider modules, and the systems in most bots and vehicles.

Hosts can handle multiple users and accounts, but are only capable of running one active infomorph at a time.

### Servers

Servers have much greater processing powers and data-management capabilities than hosts. They can handle hundreds or even thousands of users, run simulspace software, and stream services to clients across the mesh. Servers are maintained by all types of service providers, egocasting terminals, social media and news portals, corporate hubs, backup facilities, psychosurgery clinics, and VR and gaming platforms.

Servers can run multiple infomorphs. Most servers are large and stationary, though some bot and portable models exist. High-end enhanced and specialized servers may provide modifiers.

### Overloaded Devices

Certain circumstances may impair a hardware device’s functionality. Its processing capabilities may be strained by resource-intensive processes (such as VR or psychosurgery), a distributed denial-of-service attack, network outages, overwhelming traffic during a habitat crisis, damaging solar flares, or similar scenarios. Overloaded devices inflict a −10 to −30 modifier to mesh actions involving that device. Additionally, Insight pool cannot be used for tests involving that device, and the chance of acquiring a glitch in mesh combat ([Mesh Wounds](14-mesh-combat.md#mesh-wounds)) is doubled.

## Software

Everyone uses software to do things online. Most of your online interactions are facilitated by software interfaces. Software can be grouped into four categories: apps, infomorphs, operating systems, and services. Software can be attacked in [mesh combat](14-mesh-combat.md).

### Apps

Apps include programs that are run on your own hardware devices. Many of these provide specialized functions to make use of the device, such as the smartlink app to help you target your weapon, the chemical analysis app that runs on your chem sniffer, or the software systems that allow you to remotely pilot a bot.

While most apps are also available as online services, there are advantages to running it on your local device. You might, for example, be cut off or distanced from the mesh on an exoplanet, remote asteroid, or within a secured corporate facility.

Perhaps the most important app on each device is your firewall. Firewalls provide the smart security that protects each system ([Firewall](12-countermeasures.md#firewall)).

### Infomorphs

Infomorphs are activated mind-emulation suites — digital software intelligences. They are detailed on [Infomorphs](08-infomorphs.md).

### Operating System

Your operating system (OS) is the software interface for your hardware device. It allows you to control hardware functions and manage other software resources, such as apps and services.

### Services

Software services are available to authorized clients from “the cloud” — various servers on the mesh. Think of it as programs you can use locally but that are actually run on someone else’s computer. Many services are provided for free: search engines, real-time translation, rep network interfaces, anonymizing agents, and so on. Others require an account and a subscription: egocasting, simulspaces, decryption, games, XP feeds, etc. The availability of services changes depending on the local habitat and legal jurisdictions. Due to the nature of the mesh, however, even illegal services such as exploit tools, cracked proprietary software, and narcoalgorithms proliferate. The drawback to using a service over an app, however, is that the service may keep logs of your activity.

Services are only available when you have a direct mesh connection to the service provider. This means you can lose access to services if [jammed](13-system-subversion.md#jam-signals), suffering distance lag, or otherwise cut off from the mesh. Services also log your mesh ID and may be used to track you ([Tracking](10-tracking.md)).

## Wireless Links

The most common way for devices to connect is via short-range (~50 meters) wireless radio. Most devices will automatically mesh with any other devices in range (and log the interactions). It is a trivial affair to pull up a list of all devices within range, along with their mesh IDs, or to have your muse automatically alert you if a new or specific device comes within range.

### Stealthed Signals

For increased privacy, you can stealth your wireless radio signals, making them harder to detect. This method uses a combination of spread-spectrum signals, frequency hopping, and modulation. To detect a stealthed signal, you must take a complex action and win an Opposed Interface Test with the stealthed entity. The scanning entity suffers a −30 modifier to this test. GMs may wish to make this roll secretly. Some secure facilities will dedicate ALIs to actively monitor for stealthed signals; this includes correlating surveillance feeds with mesh signals, to identify anyone who is mysteriously “silent.” For this reason covert operatives sometimes carry ectos on a separate PAN to broadcast innocently and distract from their stealthed PAN.

For covert devices that are only transmitting in short bursts, wireless detection is only possible during the short period the burst transmission is being made.

### Sniffing

Wireless radio traffic is broadcast through the air (or space), meaning that it can be intercepted by other wireless devices. Since all mesh traffic is relayed through numerous devices, each connection is encrypted for privacy. “Sniffing” involves the circumvention of this decryption in order to capture and analyze the actual data traffic.

To intercept wireless communications, you need a sniffer app and you must be within radio range of the target (alternatively, you can access a device that is within radio range of the target and sniff from that location). The sniffer app automatically convinces the target to relay their mesh traffic through you (just like any other mesh node). This provides you with a list of mesh IDs to systems with which the target is actively connected ([Mesh ID](05-authentication-and-encryption.md#mesh-id)). It will also identify any connections that are protected by a VPN or quantum crypto.

You may target any one of these connections for active eavesdropping with a complex action and a [Hacking Test](11-hacking.md#hacking-tests). If successful, you capture data traffic to and from the targeted device and the connected system as long as you stay within range. Each connection requires a separate test, though GMs may allow a single test for all connections on less important NPCs.

When you capture sniffed traffic, you acquire all data passing between the two systems. This includes emails, chats, transferred files, media streams, and more. To find useful data in large amounts of captured traffic may require a Research Test. If you capture traffic during an [authentication process](05-authentication-and-encryption.md#authentication-methods), while a target is logging in, you may even capture their access credentials, such as their passcode or biometric scan. You can break a connection and force a re-authentication to capture credentials, but this requires winning a [Hacking Test](11-hacking.md#hacking-tests) with the authenticating firewall.

**Sniffing VPNs:** VPNs are more difficult to intercept: apply a −30 modifier. If successful, you acquire the encryption keys used by the two systems and may capture VPN traffic between them. However, VPNs frequently change their encryption keys to deter sniffing attacks; you can only sniff a VPN link for 1d6 minutes before you must make another Hacking Test at −30. You can use superior successes to increase the duration by 1d6 minutes or to make detection harder.

**Detecting Sniffing Attacks:** VPNs automatically monitor signal latency and other clues to detect sniffing attacks. Once a minute, the firewall (or system defender if actively defended) may make a Firewall or Infosec Test. You can use superior successes scored on the sniffing attack to modify this test by −10. If successful, the defender detects their signals are being intercepted and may take action ([Countermeasures](12-countermeasures.md)).

**Sniffing QE Comms:** Quantum-encrypted communications cannot be sniffed.

### Laser Links

Laser links are common where line-of-sight is not an issue. Laser links use wavelengths that are invisible to standard vision, but they may be seen with enhanced vision. For this reason they are avoided in high-traffic areas, as they can be distracting. Laser links can be disrupted by fog, smoke, dust storms, or other atmospheric contaminants. They are commonly used as the primary communications links between nearby habitats. Laser links are sometimes favored for covert ops tacnets, as even stealthed radio signals can be detected. Laser links cannot be sniffed.

### Other Links

Microwave links function much like laser links, except that they do not require line of sight, but are hindered by metallic obstructions. They are more common in less-settled areas. Skinlink systems, popular in wearables, require devices and users to be physically touching, and thus have no emissions that can be intercepted. Similarly, hardwired systems rely on fiberoptic cable connections. These provide excellent security against wireless interception and jamming, and are common in certain “noisy” environments.

## Accessing Multiple Systems

Online, you may connect to and interact with numerous devices, networks, and services simultaneously. You can only focus on and interact with one system at a time, though you may switch between them freely, even within the same action turn. You could, for example, use 3 quick actions to directly message your friend, instruct your home oven to start cooking dinner, and ding a stranger’s social network profile, all within the same action turn. You may also send the same command to multiple meshed systems, puppeted devices, or teleoperated drones with the same quick action. However, any complex action may only be directed towards one system at a time.
