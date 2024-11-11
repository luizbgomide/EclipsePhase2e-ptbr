# Nanoswarms & Microswarms

Swarms are colonies of nanobots or larger microbots created in a hive, programmed with specific instructions, and then set free to perform a set task. Swarms range from thousands of microbots the size of a small insect to millions of nanobots each no bigger than a microbe. Nanobots are invisible to the naked eye, though they can be detected with a nanodetector or nanoscopic vision. A concentrated presence of nanoswarms creates a visible hazy effect in the air. Likewise, mass amounts of expired nanobots leave a toner-like dust residue on nearby surfaces. Microbots are visible but still quite small, the size of a grain of sand or a dust mote, or occasionally as big as a flea.

Individual “mites” in a swarm are directed by nanocomputers, with behavioral routines modeled on biological insect and animal swarms. They are powered by tiny batteries or solar cells. Swarms stick together and work as a whole, communicating by radio or laser link. They can be tasked with specific instructions or set to follow pre-set routines. They can also be teleoperated or reprogrammed after they are released.

## Swarm Rules

The following rules apply to swarms.

### Swarm Units

Swarms are measured by their Durability. A standard swarm unit has DUR 25/DR 50. At its maximum functional level of dispersion, a swarm occupies a spherical cloud roughly 8 meters in diameter (~250 cubic meters) in size. Swarms can alter their density and shape, from filling a small-sized canister to spreading out across a much larger space. Attenuating beyond 250 contiguous cubic meters imposes modifiers to Initiative and actions (GM discretion), as the mites have difficulty communicating and coordinating.

Swarmanoids are the size of two swarm units (DUR 50/DR 100), maxing out at about 500 cubic meters (a sphere 10 meters in diameter).

### Splitting/Combining

A swarm that splits must divide its DUR/DR between smaller units that act independently. Any damage the swarm has must also be split between the new units. Likewise, swarms of the same type that merge combine their DUR/DR and damage and act as one.

### Movement

Swarms move at a very slow rate, 2/8 for microswarms and 1/4 for nanoswarms. Canisters and hives forcefully disperse them like an aerosol cloud, allowing them to quickly spread out. Individual mites are light enough to float on air currents; some use nanocopter blades to lift and propel themselves. Other mites crawl or hop. Mites must crawl in vacuum (reduce their movement by half) and swim in water or other liquids (treat as [difficult movement](../12/24-movement.md#difficult-movement)). They are vulnerable to drafts and currents; high-speed winds/liquids may hinder movement or carry a swarm away (GM discretion).

Dispersed swarms can be recollected and re-used. Collecting all the mites takes about 1 minute, more if widely dispersed.

### Commanding Swarms

Most swarms are meshed, usually puppeted to their hive or directly to their deployer. You can issue commands to the swarm and receive data from it just as you would a bot. Swarms may also be programmed in advance. Complex instructions may require a Program Test; use the rules for [scripting](../13/06-mesh-actions.md#scripting).

To prevent a swarm from being detected via their mesh signals, you can instruct it to only broadcast compressed messages/recordings at set intervals, or to only respond to set authorization signals.

Mites have tiny sensors that are very effective at identifying materials and objects. They can, for example, be programmed to target or ignore specific metals, plants, morphs, sexes, or individuals.

### Limitations

Swarms cannot hold, lift, carry, or move physical objects over half a kilogram in mass, even in microgravity. They may not make strength-based SOM Checks.

Swarms are ineffective at penetrating inside biomorphs and other biological forms (though they can attack externally); this is the realm of nanoware, nanodrugs, and nanotoxins.

Winds over 60&nbsp;kph inflict DV 1d10 a turn or more. Extended exposure to heat (over 35&nbsp;°C/95&nbsp;°F) may damage or incapacitate a swarm entirely. Aside from mobility, swarms are not affected by vacuum.

### Swarm Combat

At their full volume, swarm units are considered very large targets, though they can compress down to smaller sizes. Attacks against nanoswarms likely suffer blind-fire modifiers. Swarms are immune to wounds, called shots, grappling, knockdown, and shock effects. Area-effect weapons, fire/plasma attacks, and vehicle collisions inflict half damage. EMP and adhesive attacks (freezers) inflict DV 3d10 to swarms and a cumulative −10 modifier to all actions until repaired. All other attacks simply inflict 1&nbsp;DV to the swarm.

**Swarm Attacks:** Most mites are not equipped for combat, but microbot swarms, swarmanoids, and insect/animal swarms can attack as a swarm unit. Swarm melee attacks and effects automatically succeed against all targets within the swarm’s volume. Swarm attacks penetrate inside and ignore armor unless it is environmentally sealed, like combat armor, vacsuits, or hardsuits. Swarm attacks are [blinding](../12/21-other-action-factors.md#conditions) as mites cover eyes/sensors, crawl under clothes, invade orifices, and otherwise harry targets like a hostile tornado. Nanoswarms cannot attack in the traditional sense, however swarms such as disassemblers and pushers have an attack effect automatically applied to targets within the swarm’s volume. Combat takes its toll on swarms, however; they take DV 1 per target each action turn.

Swarms can be outrun, but GMs may call for a REF Check to avoid carrying part of the swarm with you.

### Ware

Swarmanoids and swarms may be equipped with ware, like robots. GMs must use common sense when deciding what ware is allowed; most meshware and nanoware is acceptable, but hardware like pneumatics is not.

### Attrition

Individual mites are very vulnerable. They fail and get stepped on, breathed in, stuck to things, crippled by static electricity, and otherwise destroyed in large numbers. Each day during which a swarm is deployed, it takes DV 5 (DV 10 or 20 in unfavorable environments). [Hives](19-nanotech.md#hives) repair this damage with new mites. A swarm is disabled/ineffective when damage reaches its Durability. This makes swarm units without a hive good for about 5 days of use.

## Swarms

Swarms are released directly from a hive or from pre-packaged programmable canisters.

<!--sort-->

| SWARMS             |     Comp/<wbr>GP     | Description                                                                        |
| :----------------- | :------------------: | :--------------------------------------------------------------------------------- |
| Cleaner Swarm      |        Min/1         | Cleans, eliminates forensic evidence.                                              |
| Disassembler Swarm |       Mod/R/2        | Deconstructs, DV 1d6 \[4\] per turn, eats armor.                                   |
| Engineer Swarm     |        Min/1         | Constructs/shapes environment.                                                     |
| Fixer Swarm        |        Mod/2         | Repairs 1d10 \[6\] damage per hour or 1 wound per day.                             |
| Gardener Swarm     |        Min/1         | Maintains flora, defoliates, kills weeds, pollinates, etc.                         |
| Guardian Swarm     |        Mod/2         | Disables other swarms; both swarms take DV 6 per turn.                             |
| Protean Swarm      |      As Object       | Nanofabricates a specific, pre-programmed item.                                    |
| Pusher Swarm       | Min/R/1 + drug/toxin | Exposes biomorphs to drug/toxin.                                                   |
| Saboteur Swarm     |       Mod/R/2        | Sabotages electronics/machinery; 50% chance of wound every WT turns.               |
| Scout Swarm        |        Min/1         | Maps area, collects forensic evidence, Know: Chemistry 60, Medicine: Forensics 60. |
| Spy Swarm          |        Min/1         | Surveillance, Perceive 60.                                                         |
| Taggant Swarm      |        Min/1         | Tag everything in area for tracking purposes.                                      |

<!--sort-->

**Cleaner:** This nanoswarm cleans, polishes, and removes dirt and stains. You may deploy it to sanitize an area, specific objects, or people. Some facilities employ permanent cleaner swarms to keep their area spotless. Cleaners are especially useful for decontaminating an area of hazardous toxins or chemicals. Covert operatives and criminals use cleaners to eliminate potential forensic evidence, such as blood, hair, or anything that could be DNA-typed.

**Disassembler:** Also known as smart corrosives, these nanobots break down matter. They can be programmed to take apart specific materials while ignoring others, leaving them intact. They are sometimes used as an anti-matériel weapon, eating away at synthmorphs, weapons, and gear while ignoring biomorphs (or vice versa). Upon contact, disassemblers inflict DV 1d6 per action turn. Accumulated damage counts as a wound when your Wound Threshold is reached. Worn armor (both energy and kinetic) protects against this damage (unless the swarm is programmed to ignore it), but is also eaten away; reduce the AV by the damage inflicted, splitting it between armor types (i.e., a disassembler inflicting DV 2 turns AV 4/2 into 3/1).

**Engineer:** Engineer microswarms are used for construction purposes: erecting walls, digging tunnels, sealing holes, reinforcing foundations, and so on. Though they work slower than robots, they are useful for hard-to-get areas, complex designs, or handling difficult materials.

**Fixer:** Fixers repair objects and restore them to their original specifications. They must be programmed with the item’s nanofabrication blueprints or given time (~an hour) to scan an identical object; they are not smart enough to recognize and repair damage on their own. A fixer swarm repairs 1d10 \[6\] damage per hour. Once all damage is repaired, it will restore 1 wound per day. Fixers also clean and polish items, returning them to a new, pristine state. Fixer swarms cannot effect repairs on objects with more than 3 wounds, but they will apply a +30 modifier to Hardware Tests for repair.

**Gardener:** This microswarm is useful for a number of agricultural purposes: killing weeds, planting seeds, trimming plants, pollinating, and even harvesting small items. It can also be programmed to defoliate an area. Gardener swarms are common in habitat greenhouses and hydroponics bays.

**Guardian:** Guardians watch for and attack other unauthorized swarms. These mites neutralize other nanobots by physically latching on to them, effectively disabling both. This war of attrition takes its toll on the guardian swarm as well. Every action turn, both the guardian and targeted swarm take DV 1d10 \[6\]. Guardians can be programmed or instructed to release captured mites, allowing you to temporarily disable a swarm and then release it afterwards.

**Protean:** This nanoswarm disassembles other materials in order to create a single, specific object (much like a specialized nanofabricator). The proteans must be able to scavenge appropriate raw materials (for example, to create a metallic device the nanobots must transform something else made of metal), whether by specific or indiscriminate targeting of their surroundings. Assembly time is based upon complexity, just like regular nanofabrication. The specific blueprint they follow must be specified when the swarm is acquired.

**Pusher:** Pusher microswarms deliver drug/toxin payloads to biological targets. They either inject a target in mosquito mode or mass-release an aerosol cloud for inhalation/skin contact. Pusher swarms can be programmed to seek out specific people, biomorphs or animals of a certain type, or all living things. A biological target who comes into contact with a pusher swarm is automatically exposed to the effect of the carried drug or toxin. Pushers cannot penetrate vacsuits, but they can linger on the exterior long enough to target the occupant when they remove it. Each swarm carries enough to affect 5 targets.

**Saboteur:** Sab nanobots infiltrate electronics or machinery and sabotage them in small but difficult to discern ways: severed connections, disabled components, gummed up moving parts, etc. You may set them to target a specific device, a type of device (i.e., all case morphs), or any electronics or machinery they can find. Once an object is exposed, the saboteurs have a 50% chance of inflicting a wound (and the equivalent DV) every (Wound Threshold) action turns. This will continue until the target has suffered 5 wounds and is incapacitated. Armor has no effect, but the wounds can be repaired as normal. Saboteurs cannot sabotage other nanoswarms.

**Scout:** A scout nanoswarm will systematically map and explore an area, sampling and chemically analyzing all materials and substances it encounters. Scouts can thoroughly map a room, identify all of the objects, and collect forensic evidence about who recently visited and what has gone on there. Scouts have Know: Chemistry 60 and Medicine: Forensics at 60. They can identify DNA, gunpowder residue from firearms, clothing fibers, smart animal dander, and similar evidence up to 2 weeks old. Scouts can penetrate inside drawers, closets, clothing, and other areas that are not air-tight.

**Spy:** Also known as “smart dust,” spy swarms are invisible clouds of surveillance. Spy mites are loaded with cameras (standard visual wavelengths), microphones, and chemical sensors. They offer blanket surveillance of an area. Each swarm has Perceive 60.

**Taggant:** Taggants grip onto and lodge themselves into everything in their dispersal volume. Each carries a unique identifier, so that if it is found, the tagged person or object can be linked to the point they were tagged. Taggants can be programmed to remain silent, responding to query broadcasts made with the proper crypto codes, or they can be programmed to broadcast their location back to the deployer via the mesh. Some high-security facilities deploy taggants at their egress points when alarms are triggered to mark intruders.

<!--sort-end-->
