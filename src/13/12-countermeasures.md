# Countermeasures

The ongoing struggle between hackers and electronic security is best described as an ever-evolving arms race. Hackers continually find and share new exploits that allow them to subvert new systems, software vendors release automatically installed update patches to close the holes, repeat ad nauseam. System admins and security hackers have a menu of options for handling intruders, though the level of security on a system can range from paper-thin to extremely hostile.

## Firewall

In Eclipse Phase, a firewall is a non-sapient neural-net security suite that monitors network traffic and defends against hackers. Every system has a firewall app actively defending it. Firewalls may initiate automatic countermeasures, depending on their programming.

Each firewall has a rating measuring its defensive capabilities. Firewall ratings are based on the type of device, as noted on the Firewall Ratings table. This is used to oppose [Hacking Tests](11-hacking.md#hacking-tests) made by hackers. At the GM’s discretion, some firewalls may be weaker if old or non-maintained or stronger if state-of-the-art.

If the firewall app on a device is deleted or crashed, tests to hack the system are unopposed until the firewall is restored, unless a system defender engages in active monitoring.

<blockquote class="table">

### Firewall Ratings

| Device | Firewall Rating |
| :----: | :-------------: |
|  Mote  |       30        |
|  Host  |       50        |
| Server |       70        |

</blockquote>

### Firewall Threat Models

Firewalls build an understanding of what behavior is common or unusual and use these algorithms to identify potential intruders. For example, a firewall will know when a certain user usually logs on, where from, what apps they use, what files they access, and so on. If a hacker uses their credentials but from a different place, at a different time, and doing different things, the firewall may suspect something is amiss and take a closer look. Even a skillful hacker may still be identified by anomalous actions.

GMs can call for a Hacking Test whenever they feel a hacker may have exceeded normal activity. If the firewall wins, downgrade the hacker’s status one level — from hidden to covert (triggering a passive alert), or covert to spotted (triggering an active alert). Alternatively, a hacker who is clearly engaging in shady activity on a well-secured system may trigger an alert, no matter how well they roll. Use this option sparingly, and remember that it applies both to PCs and NPCs.

## System Defender

The firewall is but the first line of defense. Almost every system is also monitored by an entity known as its _system defender_. For most devices, this is the resident ALI. Characters skilled in infosec typically guard their own PANs; people who are not rely on their muses. Dedicated teams of operatives often puppet their PANs to the group’s hacker, who can overwatch the entire group’s security.

System defenders have security if not admin privileges. If a passive or active alert is triggered, they are informed. Defenders are responsible for triggering non-automatic countermeasures.

**Multiple Defenders:** Some systems may have more then one defender present. When it comes to active countermeasures and other actions, defenders choose to work together or separately. If acting in concert, the other defenders provide a [teamwork bonus](../03/01-how-to-play.md#teamwork); only the primary defender can use pools. If acting individually, each defender relies on their own Initiative, skills, and pools.

### Active Defense

As a complex action, a system defender can assume control of a system’s firewall defenses for one action turn. While engaged in active defense, use the defender’s Infosec skill in place of Firewall rating for Hacking Tests. The defender may use pools on these tests. Only one defender can engage in active defense at a time.

## Security Alerts

If a hacking attempt is not stealthy enough, it is likely to earn the attention of the firewall and system defender. Security alerts come in two flavors: passive and active.

### Passive Alert

Passive alerts are triggered whenever the firewall or defender succeeds on their roll but loses the opposed test against a hacker’s [subtle intrusion attack](11-hacking.md#subtle-intrusion). They are also set off when a hacker exposes themselves by rolling a superior failure on a Hacking Test while within the system.

Passive alerts occur when a system detects anomalous activity that may indicate a hacking attempt in progress. The system immediately flags a visual or acoustic cue to the system defender(s) and possibly the owner or admins. The system may be configured to automatically launch one or more passive countermeasures (see below). Depending on the system, extra security hackers or AIs may be brought in to help investigate. If the intruder is not encountered again or located within a set time period (usually about 10 minutes), the alarm is deactivated and the event is logged as an anomaly.

### Active Alert

An active alert is triggered when an intruder achieves spotted status or someone attempts a brute-force attack without scoring a critical success.

Active alerts are issued when the system knows an intruder is present. The system immediately alerts the system defender(s), owners, and admins. Additional security assets (hackers and AIs) may be called in. The system also launches active countermeasures against the intruder (see below). Active alerts are maintained for as long as the intruder is present and sometimes for a lengthy period afterwards just in case the hacker returns.

When a system is on active alert, all intruders suffer a −10 modifier to Infosec Tests for the duration of the alert.

## Passive Countermeasures

Passive countermeasures are launched as a precaution whenever there is unusual activity or other signs that there may be an intruder or malware at work. Some of these countermeasures are automatically triggered by the system or firewall whenever a passive or active alert is initiated.

<!--sort-->

### Backup

**\[Automatic\]**

Some systems are set to automatically backup all logs and critical data when a passive alert goes off. These backups are often copied to a secure storage in the cloud or to another dedicated system, where they are protected from deletion.

### Egress Filtering

**\[Automatic\]**

In an attempt to deter data exfiltration, the firewall temporarily blocks attempts to download or transfer specific files or data types. Ego backups and access logs are commonly flagged and blocked, though each system may designate its own specifics. To overcome this filtering, a hacker must make a complex action and win a Hacking Test.

### Locate Intruder

The system defender can attempt to track down the source of the passive alert and pinpoint any interlopers. See [Zeroing In](11-hacking.md#zeroing-in).

### Re-Authenticate

**\[Automatic\]**

System firewalls can be set to automatically re-authenticate all active users whenever a passive alert is triggered. Each user will be re-authenticated in 1d6 action turns, though a large system with hundreds or thousands of users may take 1d6 minutes. Any intruders that do not have hidden status must make a Hacking Test against the system firewall. If the firewall wins, the intruder gains the spotted status and the system goes to active alert. If the intruder has valid credentials (such as a stolen passcode), they automatically succeed.

### Reduce Privileges

**\[Automatic\]**

As a protective measure, the system temporarily reduces access privileges available to standard users — and sometimes security accounts as well. This means that legitimate users may be unable to perform certain functions, use some apps/services, or access certain directories without authorization from an admin account.

<!--sort-end-->

## Active Countermeasures

Active countermeasures are initiated when an intruder is fully detected (spotted status). Systems/firewalls can be set to immediately trigger automatic countermeasures; others may be pursued at the defender’s discretion.

<!--sort-->

### Counter-intrusion

Though illegal in some jurisdictions, system defenders may pro-actively protect their wards by counter-attacking the hacker. For this to occur, the intruder must first be [successfully traced](10-tracking.md#mesh-activity-tracking) and their mesh ID obtained. Once this occurs, the defender can then launch their own intrusion on the system from which the hacker originates.

### Crash and Lockout

The defender can attempt to crash the account shell of an intruder that has been spotted ([Mesh Combat](14-mesh-combat.md)). If successful, the intruder’s mesh ID can be blocked from accessing the system again ([Lockout](06-mesh-actions.md#security-actions)). Hacked accounts are quarantined or deleted and not usable again until a security audit approves and reinstates it.

### Reboot/Shutdown

The nuclear option for handling an interloper is to reboot or shut down the system. In this case, the system closes all connections to other systems, logs off users, terminates all processes, and shuts itself down — thereby booting out the intruder (at least temporarily). The disadvantage, of course, is that the system must interrupt its activities. For example, shutting down your mesh inserts means losing all communication with teammates, access to augmented reality, and control over puppeted/linked devices. The intruder may attempt to access the system when it reboots, but if they don’t have account credentials or a back door, they will need to hack in again. Remote defenders will also need to take an action to log back in.

Initiating a reboot/shutdown only takes a complex action, but the actual shutdown process takes 1d6 action turns (motes and hosts) or 1d6 minutes (servers). Rebooting takes an equivalent amount of time.

Logged-in users (including intruders) are warned when a reboot or shutdown is initiated. Once started, the shutdown process cannot be stopped, but it may be prolonged by 1d6 action turns with a complex action; this requires security/admin privileges or an Infosec Test.

**Hard Shutdown:** The shutdown process takes time in order to warn users, save files, end processes neatly, and otherwise protect the system. A “hard” shutdown is also possible in emergency situations. This requires an Interface Test, a complex action, and admin privileges. If successful, the system shuts down at the end of that action turn. Hard shutdowns require double the reboot time and may result in lost data (GM discretion). You can also cause a hard shutdown by physically powering down, cutting power, or destroying the device.

### Terminate Connections

**\[Automatic\]**

An alternative to shutdown or rebooting is simply to sever all connections (usually by temporarily disabling the device’s wireless capabilities and going into “airplane mode”). The system loses all active connections, but any intruders are dumped. Termination takes a complex action to initiate and completes at the end of that action turn. Connectivity may be set to restore on the next action turn, in a set time frame, or only when initiated by a local admin. Restarting connectivity takes 1 action turn. Any remote users will need to log back in; intruders without proper credentials will need to hack the system again. While connections are terminated, the system cannot communicate and interact with other systems.

### Trace

**\[Automatic\]**

Defenders can initiate a trace on a spotted intruder. Most hackers are careful to use an anonymizing service to mask their mesh ID and location, but this is not always the case. If an intruder is physically located, the standard procedure is to alert habitat security or other local or private police, who will mobilize to apprehend the suspect.

<!--sort-end-->

## Security Audits

Security-conscious systems will undergo an audit on a regular basis or after any detected intrusion, with the intent of patching vulnerabilities that were exploited, eliminating backdoors that were installed, and determining what the intruder did and what they were after. The GM determines when an audit is undertaken. Make an Infosec Test for the system defender, with a timeframe of 24 hours. If successful, any recently exploited vulnerabilities are patched (the hacker loses the +30 bonus to hack again). Superior successes reveal backdoors or supply additional info on what the intruder was up to.

<blockquote>

## Security Design

Every system is unique and handles security differently. The GM maps out each system’s set-up.

**Motes** are notorious for minimal security and outdated defenses. Sometimes, however, they are puppeted to a controlling “chokepoint” node with better security (this is the case with most PANs).

**Host** defenses largely depend on the security consciousness of their owner. Muses act as system defender for mesh inserts and ectos.

**Servers** use security ALIs and take their defenses seriously. Corporate networks often use tiered networks or air-gapped systems ([Mesh Topology](02-mesh-topology.md)) to protect critical assets. Security hackers may be on-site or on-call, arriving in d6 action turns. Some simply seek to kick intruders out. Others will trace intruders, dispatching security forces or police to apprehend suspects if located, or hack them back. Security audits are likely to be frequent.

</blockquote>
