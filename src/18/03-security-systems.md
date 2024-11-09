# Security Systems

Firewall agents routinely need to get into places they are not supposed to be. Post-Fall security systems rely heavily on access control, sensor scans, and active countermeasures.

## Access Control

Basic measures to keep unwanted people out include walls, locks, fencing, defensive landscaping, security lighting, and entoptic warnings. Given modern technology, these are ineffective against a determined intruder. Barriers are treated just like other inanimate objects for purposes of attacks and damage ([Objects & Structures](../12/26-objects-and-structures.md)).

<!--sort-->

### Bug Zappers

Nanoswarms and microbots pose a serious threat to security; bug zapper systems are deployed to keep them out. Bug zappers create minute EMP pulses that are harmless to most electronic equipment and implants but wreak havoc on nanobot swarms, microbugs, specks, and similar nano- and micro-sized electronics. Zapper systems come in many forms, including mats, strips, and micro-sized generators that may be thrown around an area to stick to every surface. Portal zappers are deployed in strips around doorways, ducts, and other entrances, creating a field that zaps every device that passes through (inflicting DV 3d10). Secure installations make use of zapper panels with conductive surfaces on walls, floors, etc., thus only damaging swarms and microbots that crawl or land upon them. In areas that are remote or have heavily shielded electronics, zappers may be installed to destroy all free-crawling or flying nanoswarms and microbots in an entire room (DV 3d10 per turn). Zappers do not damage larger electronics or implanted devices, though they may cause disruptions to communications and mesh activity.

### Electronic Locks

E-locks are used to maintain privacy, but are easy to defeat and so are rarely used in very secure areas. They have several advantages over old-fashioned mechanical locks: different authentication methods can be required for different users, all events are logged (entry, exit, failed authentications), and they can be connected (usually hardwired but sometimes encrypted wireless) to security systems for remote control and alarm triggering.

E-locks use one of several authentication systems, or sometimes a combination of systems:

- **Biometric:** The lock scans one or more biometric prints. Common biometrics include DNA, facial thermographic, fingerprint, gait, hand veins, iris, keystroke, odor, palm, retinal, and voice prints. The drawback to biometric systems is that they must be updated if a user resleeves and various technologies exist to replicate biometric patterns. More sophisticated biometric systems rely on brainprint ID.
- **Keypad:** This is an alphanumeric keypad upon which users enter a specific code. Different users can have different codes.
- **Token:** Authorized users must carry some sort of physical token that interacts with the lock to open the door, such as a keycard, electronic key, or their nanotat ID ([Nanotat Scans](../15/07-identity-systems.md#nanotat-scans)).
- **Wireless Code:** Users must transmit a cryptographic code via near-proximity wireless signal.

Though various technologies exist to defeat each of these systems, there are three methods that work against almost all e-locks:

- **COT:** A [covert operations tool](../16/17-espionage-and-security-tech.md) infiltrates a lock with nanobots that swarm in and engage the electronic mechanism. The drawback is that its use may be logged or an alarm triggered. Some e-locks are equipped with [guardian nanoswarms](../16/20-nanoswarms-and-microswarms.md#swarms) to defeat COTs, but the COT nanobots usually manage to open the lock before the guardians disable them.
- **Hacking:** Most e-locks are puppeted to a security system, so an intruder that hacks the security network can open the lock from within. This can be difficult, however, especially if the security system is wirelessly isolated or hardwired. If done right, however, all evidence of the lock being opened can be erased.
- **Physical Tampering:** The third method is to physically open the lock’s casing and then trigger the mechanism to open the door. This is handled as two separate Hardware: Electronics task actions with a timeframe of 1 minute each. Most e-locks have anti-tamper circuits that will set off an alarm if the attacker does not achieve a superior success when opening the case.

### Invisible Doors

Physical portals can be constructed with the same refractive metamaterials used for as [invisibility cloaks](../16/17-espionage-and-security-tech.md), literally bending light waves around the doorway. When strategically placed with crafty architecture, these can be made to look like a standard corner or alcove — only people can walk right through them. Others are cleverly tuned to reflect light, making them look like full-length mirrors. In either case, these portals will not be physical to the touch. They can be detected with radar or x-rays, but are otherwise invisible to the rest of the electromagnetic spectrum (−60 to Perceive Tests).

### Lockbots

Lockbots are robot guardians physically emplaced to protect portals. A lockbot’s ALI monitors its surroundings and identifies users and keys with visual recognition software (Perceive 60). It will seal its orifice and not accept a key that doesn’t look right or that comes from an unrecognized user. A guardian nanobot hive protects the lock from invasive nanobots. Lockbots are air-gapped to deter hacking. If attacked, however, lockbots are programmed to send out an alarm signal via the mesh. Lockbots can extrude one-meter fractal appendages to defend the portal; many are equipped with additional weapons. Lockbots may have the ability to destroy what they are protecting or trigger extra safeguards such as security bolts or atmospheric decompression.

<blockquote class="indent stat-list">

<!--sort-union-->

### Lockbot

- **Complexity/GP:** Maj/3

---

- **WT:** 6 • **DUR:** 30 • **DR:** 60 • **AV:** 8/6
- **Insight** 0 **Moxie** 0 **Vigor** 0 **Flex** 1

---

- **Movement Rate:** None
- **Ware:** Eelware, Fixer Hive, Fractal Digits, Guardian Hive, Telescoping Limbs, Weapon Mounts (2 Articulated/Concealed)

</blockquote>

### Puzzle Locks

The 21st century saw a move from mechanical locks to electronic locking mechanisms. These devices worked well for about 50 years, until electronic infiltration capabilities rendered them largely useless. The more recent development of puzzle locks is a return to their early mechanical forebears.

Each puzzle lock is a unique, expensive, artisanal item. Designers specifically craft their interface and internal mechanisms in surveillance-free environments without the aid of digital tools, so as to leave no online record of their functionality. Puzzle locks require a unique set of hardcopy keys and lengthy physical manipulation sequences to unlock. Some also require specific biometrics. This makes them resistant to COTs and electronic hacking. They are usually protected by guardian nanoswarms and other countersurveillance measures. An intruder who somehow copies the keys, biometrics, and other necessary components would still need to bypass the puzzle mechanisms, requiring a timeframe of 1 hour and a COG Check at −60. If the counter-surveillance systems are bypassed, a detailed analysis of the lock using appropriate sensors (requiring a Hardware: Industrial Test with a timeframe of 1 hour) can reduce the modifier to −30.

### Self-Repairing Barriers

High-security installations use walls and doors capable of rapidly repairing themselves. Some of these are simply equipped with [fixer hives](../16/20-nanoswarms-and-microswarms.md#swarms). Others, however, are composed of shape-memory materials, reversible polymers, or substances laced with healing-agent capsules or microvascular systems. Each of these self-healing compositions will automatically expand and solidify to fill small holes and damage, at a rate of 5 damage per action turn. This is enough to automatically counter the damage inflicted by a COT, rendering it ineffective. Holes created by wounds take an hour to fully repair; damage from 3 wounds or more may not be repaired.

### Slip Walls

On planetary surfaces, high walls and fences are still common as a first line of defense against interlopers. Slip walls are surface-treated with [slip](../16/15-chemicals-drugs-and-toxins.md#chemicals), creating a virtually frictionless surface that is exceptionally difficult to climb (−60 to Athletics Tests).

<!--sort-end-->

### Wireless Inhibitors

Wireless inhibitors are simple paint jobs or construction materials that block radio signals. They are used to create a contained area in which a wireless network may operate freely without worry that the signals will escape out of the area, where they can be intercepted. Wireless inhibitors allow the convenience of using wireless links within a secure area rather than the clumsier hardwired connections. If an intruder manages to gain access inside the area, however, they can intercept, sniff, and hack wireless devices as normal.

## Sensor Scans

Numerous sensors ([Senses and Sensors](../16/07-senses-and-sensors.md)) are deployed to monitor and record the passage of people and things. These sensors are typically puppeted to a security network and monitored by ALIs, meaning they are vulnerable to hacking and possibly jamming.

When an operator is perceiving through the sensor (like watching a video), use Perceive skill. When the sensor itself is doing the detection work, use Interface skill. They are opposed with Infiltrate.

A few specific sensor types deserve mention here:

<!--sort-->

**Chemical Sniffers:** In addition to detecting explosives and weapons, sniffers can be set to detect the carbon dioxide exhaled in transhuman breaths. This is useful for detecting intruding biomorphs in areas that are abandoned/off-limits.

**Electrical Sensors:** Sensors set in portals can detect a biomorph’s electromagnetic field in addition to the electrical fields of synthmorphs.

**Heartbeat Sensors:** These sensitive sensors detect the vibration caused by transhuman heart beats. They can even be used to detect the heartbeats of passengers inside a large vehicle.

**Radiation Sensors:** Sensors that detect the presence of nukes and other radioactive and destructive materials are common in every habitat and spaceport.

**Seismic Sensors:** Embedded in flooring, these sensors pick up the pressure and vibration of weight and movement.

<!--sort-end-->

### Weapon Scanners

Personal weapon scanners monitor a specific area, such as a small room or doorway. They use a number of sensing systems to detect and identify weapons and other dangerous objects, including chemical sniffers and radar/terahertz/infrared/x-ray/ultrasound imaging. They can detect the following items and substances:

- Metal used in kinetic weapons, seekers, and flechette weapons
- Devices with onboard hives of metallic nanobots (e.g., COTs, spindles)
- Magnetic elements in plasma guns and railguns
- Propellant from firearms ammunition and seekers
- Chemical fuels used in torch spray weapons
- All explosives and grenades by their chemical particulate emissions
- Poisons and bioagents in flechette weapons

To sneak a weapon past a weapon scanner requires an Infiltrate Test opposed by the scanner operator’s Interface. The weapon scanner negates the concealability modifier for any items detectable as noted above.

### Wireless Scanning

High-security areas may monitor for wireless radio signals originating within their area as a way of detecting intruders by their communications emissions. These signals can even be used to track the intruder’s location ([Tracking](../13/10-tracking.md)). To bypass wireless detection systems, covert operatives can use line-of-sight laser links or touchbased skinlinks.

## Active Countermeasures

When all else fails, active countermeasures are deployed against intruders. Robotic sentries are more common than transhuman guards; these sometimes operate synthmorphs such as synths, slitheroids, arachnoids, or reapers. Some may be entrenched armored turret weapon emplacements, popping out of walls and ceilings or gliding on tracks. In some circumstances, these shells are teleoperated by transhuman security.

Additional countermeasures depend on the facility in question. Some sites will engage in active jamming ([Jam Signals](../13/13-system-subversion.md#jam-signals)), to deny the intruders any communication. Others will deploy hostile nanoswarms and even chemical weapons.

### Nanotagging

Post-Fall security often centers not around keeping people out, but tracking them after they come and go. Taggant swarms are used to physically tag and track everyone that enters an area. Taggant systems often chain multiple hives in different areas together, so that the taggant nanobots emerge from one hive, float through the room, and then return to the other for recharging and reuse. Anyone passing through the room will end up with taggant hitchhikers. Once they lose proximity to the rest of the hive, they hide and periodically broadcast pulsed transmissions meant to give their position to pursuers or investigators. Some may drop off in clusters to form a breadcrumb trail to the interloper.

Guardian swarms can be used to counter taggants, but it takes time to get them all; you will still be trackable for 1d6 minutes.
