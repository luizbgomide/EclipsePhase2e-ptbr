# Mesh Topology

Though the mesh as a whole consists of innumerable devices all connected to the other devices around them, the actual layout is more complex. Many sub-networks exist within the mesh network itself: puppeted devices, VPNs, PANs, and tiered systems.

## Puppeted Devices

Some devices are puppeted to others, so that any traffic and access attempts go through a single well-protected gateway node. For example, individual components of a security system (doors, sensors, etc.) are usually puppeted to a central security node that serves as a chokepoint against anyone hoping to hack the system. All traffic to and from puppeted devices is routed through the master. This allows a puppeted device to rely on the master’s security features and active monitoring. Anyone that wants to connect to or hack into a puppeted device is rerouted to the master for authentication and security scrutiny.

Puppeted devices automatically accept commands from their master device. This means that a hacker who penetrates a master system can legitimately access and issue commands to a puppeted device, assuming their [access privileges](05-authentication-and-encryption.md#accounts--access-privileges) allow for it.

## PANs: Personal Area Networks

Since many of the things you wear, carry, use, or have implanted are meshed, it makes sense to network them together — this is your PAN. Your mesh inserts (or ecto) act as the master hub of your network; your other devices are puppeted. This means that anyone that wishes to access these devices must go through you (or your muse) first. You can interface with your PAN devices via AR and freely share data between them. You can share access to these devices with others on a temporary or permanent basis. On the flipside, anyone that hacks you will have access to your puppeted devices.

## VPNs: Virtual Private Networks

VPNs link together nodes via point-to-point encrypted “tunnels” across the public mesh. This secure connection allows connected users to privately communicate and remotely share services and resources. VPNs enable mobile offices, social networks, tacnets, and other private networks to exist and function within the wider mesh.

In practical terms, VPNs offer better encryption than standard mesh traffic, making it difficult to [sniff](04-devices-apps-and-links.md#sniffing) your connections, though you can still be [tracked](10-tracking.md). If one of the nodes within the VPN is hacked, however, that traffic becomes vulnerable.

## Tiered Systems

Hypercorp networks, habitats, and similar large systems operate on a tiered model. In order to access one particular device or network, you may first need to access the nodes or networks tiered above it. Nodes in a lower tier will only communicate with recognized devices in the tier above them. Usually the deeper you go, the harder the security gets. Tiered systems can sometimes be defeated with [spoofing attacks](05-authentication-and-encryption.md#spoofing), by faking signals from a node in the tier above.

## Air-Gapped Systems

The most heavily secure systems are air-gapped — physically separated from the mesh. They may be hardwired, lacking wireless transceivers, or enclosed within radio-proof barriers. The only way to access such systems is physically, either directly plugging in, defeating the radio-blocking enclosure, or somehow attaching a wireless transceiver to the system.

## Islands in the Net

The distance between habitats requires special consideration. A signal sent from the inner planets to a station in the Kuiper Belt, 50&nbsp;AU from the sun, can take as long as 7 hours, traveling at the speed of light. This means that communications between habitats outside of your local region (any others within 50,000 kilometers) may suffer time lags of minutes or hours — each way. This makes standard forms of communication (video calls and even messaging) a challenge, and means that news from afar is already old when it is received. In a sense, each region is its own island in the mesh. On planetary bodies like Mars, Venus, Luna, or Titan, “local” encompasses all of the habitats and linked mesh networks on that planetary body and in orbit.

If you wish to search the mesh or interact with someone or something outside of your region, the easiest method is to transmit a search ALI (usually a copy of your muse) or a fork. In this case, the transmission time is added to the adjusted timeframe of any task actions (i.e., searching the mesh of a station 10 light-minutes away adds 20 minutes as the AI is transmitted over and the results are transmitted back). Since long-distance communications are sometimes interfered with or bumped for higher-priority items, GMs can increase this time at their discretion. If the research involves correlation and fine-tuning the search parameters based on data accumulated from different locals, the timeframe may be exponentially increased due to the need for back-and-forth interaction.

Exoplanet meshes are even more removed. They can only be accessed in the short intervals when a pandora gate is opened to their location. Depending on the colony or importance of the gatecrashing mission, the time between connections may be days, weeks, or months.
