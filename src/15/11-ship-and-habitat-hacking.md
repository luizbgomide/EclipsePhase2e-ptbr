# Ship & Habitat Hacking

Spaceships and habitats are complex environments with many technological systems that are vulnerable to hacking and sabotage. Functions such as sensor, security, weapon, and drive/attitude-control systems can be hacked and manipulated like any other electronics ([The Mesh](../13/00-the-mesh.md)). These sub-systems are usually separated into distinct [VPNs](../13/02-mesh-topology.md#vpns-virtual-private-networks), sometimes separate and decentralized, sometimes as a [tiered system](../13/02-mesh-topology.md#tiered-systems) with a high-security master control network overseeing everything. On larger habitats, each regional area will have its own top-level network, with various functions — administration, defense, infrastructure, public service, resources, security, spaceport, etc. — having their own sub-systems. On smaller habitats/ships, related systems are likely to be consolidated.

Other features specific to ships and habitats are covered here.

## Airlocks

Most airlocks come in one of three sizes:

- **Small airlocks** are rare, partly to discourage you from venturing out alone. They fit one medium-sized person. They are primarily used for repair drones.
- **Standard airlocks** are the most common, large enough for two medium-sized persons.
- **Large airlocks** are industrial portals primarily found in docking or service bays. They can hold four to eight medium-sized people.

Airlock doors take one action turn to open and close and 3 action turns or more to fill or evacuate with air.

Airlock Armor and DR can be found on [Future Materials](../12/27-future-materials.md).

### Airlock Safety Features

Because airlocks are so critical to the safety of transhumans in space, they’re equipped with numerous safety features. Only one door can be opened at a time, to prevent accidental depressurization. Airlocks leading to and from pressurized areas work as normal doors unless a module is depressurized, in which case they kick in as airlocks.

All airlocks have hardwired sensors that prevent them closing on people or objects passing through. If this is overridden or malfunctioning, getting part of one’s body caught in an airlock as it closes causes DV 3d10 + 10 and almost always results in dismemberment. Getting one’s head, neck, or vitals caught in an airlock is certain death.

Airlocks are usually programmed to alert the operations center each time they are opened.

Airlocks can be linked to nearby heat and carbon monoxide sensors. In case of a fire, these automatically close an air gap between the detected fire and the rest of the ship/habitat and enable the operations center to remotely blow the lock without cycling in order to put out the fire.

### Hacking an Airlock

To prevent tampering, the only functions accessible by wireless interface on most airlocks are identification and diagnostics. Operational features are either hardwired to a control panel or accessible only by physically opening a sealed panel on the door.

If you lack authorization, the control panel can be physically hacked with a Hardware: Electronics Test and appropriate tools. This is a task action with a timeframe of 2 minutes.

If the control panel is somehow damaged or disabled, you can physically hack the airlock itself with a Hardware: Industrial Test; this is a task action with a timeframe of 2 minutes.

Both of the above options allow you to override safety features, including disabling the lock’s safety so that it can close on people or objects, deactivating air pressure sensors, canceling alert notifications, and blowing an airlock open without cycling. Both options will also allow you to attach a [gray box](../16/17-espionage-and-security-tech.md) to an airlock in order to remotely access it.

### Blowing an Airlock

Airlocks can be hacked to skip their cycling time. Typically this is performed on the outer door so that the contents of the airlock (including any occupants) jettison rapidly. Blowing an airlock inward (i.e., opening a vacuum-filled airlock onto an atmosphere-filled corridor without cycling) produces only a loud bang, some ear popping, and possibly strong gusts that may toss small objects around.

When an airlock is blown outward, all of the atmosphere inside vents into space in half the time that would be required for the lock to cycle. In a small airlock, this has little effect other than possibly causing small, loose objects to fly out. On standard and larger airlocks, it creates a strong blast of wind. If within 25 meters (50 for large airlocks), you must make a REF Check to grab hold of something or be blown toward the outer door. You must continue to make this test each turn until the atmosphere is drained. If you fail, you are drawn towards the airlock and out at a rate of 20 meters per turn (40 for large airlocks). Others that you pass near can attempt to grab and hold on to you with a SOM Check. If the habitat is filled with water or another liquid instead of a gaseous atmosphere, these tests suffer a −30 modifier. If you have advance warning to brace yourself, add +10. If both doors are opened, atmosphere will continue to forcefully vent until the air pressure within the ship or habitat (or the local section if sealed off) drops to minimal levels.

Decompression throws objects that aren’t fastened down out the airlock. These objects and debris may hit you on their way out, inflicting anywhere from DV 1d10 to 4d10 (GM discretion). Large objects resist being blown out based on their weight and inertia (GM discretion). Open airlocks may become fully or partially blocked if a larger object (such as a desk or vehicle) is sucked up against them.

### Airlocks in High-Pressure Environments

In high-pressure environments (Venus’s surface, Europa’s subsurface ocean, etc.), decompression effects are more dramatic. The gear and morphs employed by transhumans for survival in these environments are engineered to survive in them, but can’t withstand an abrupt change in pressure. Anything inside an airlock in these situations will be instantly killed or crushed by an immediate change from inside to outside pressure, and the structure surrounding the airlock is likely to suffer catastrophic damage.

## Bulkhead Doors

A bulkhead door is simply half an airlock. Bulkheads are installed in strategic locations, so that segments of the habitat/ship can be shut off or isolated in the event of depressurization, a biological outbreak, physical invasion, or other emergency scenarios. Bulkheads follow all of the rules for airlocks, minus the time needed to cycle air.

## Hulls and Superstructure

Hulls vary in composition and properties, from the composite alloy hulls of cylinders to the thick silicate rock walls of beehives. Superstructure varies as well; cylinders, spheres, and toruses have sturdy metal trusswork underlying and supporting the hull material, although older designs might also have massive crossbeams running across the interior axis. Beehives and asteroid bubbles, on the other hand, rely entirely on their thick rock walls for superstructure. Tin-can habs are typically small enough that the hull is self-supporting, requiring little or no interior bracing, though they can be bolstered with insulation or radiation shielding.

Armor and DR for hulls are detailed on [Objects & Structures](../12/26-objects-and-structures.md). Many hulls are “selfhealing,” meaning they are either equipped with pockets of liquid sealant that automatically fill and harden punctures or fixer swarms to repair damage over time. Serious breaches and “dumb hulls” must be repaired with metal sheets and welders.

Hull breaches in low-pressure environments have the same effect as blowing an airlock.

## Life Support

Life support on a station or ship replenishes breathable atmosphere and filters it for impurities. In very primitive systems, life support is finite, consisting of tanks of fresh atmospheric gases. In Eclipse Phase, modern systems can run indefinitely if regularly maintained and not interfered with by recovering and chemically altering “stale” gases.

### Sabotaging Life Support

Biological life-support systems use organisms such as algae to metabolize waste CO2 and release breathable oxygen. Such systems are often in their own modules or located along the exterior of a ship or station, close to the hull. Given their critical nature, the controls for these systems are air-gapped and well protected; if hacked, oxygen levels and other aspects of the system can be manipulated ([Dangerous Atmosphere](../12/29-hostile-environments.md#dangerous-atmosphere)), possibly leading to [asphyxiation](../12/28-environmental-factors.md#asphyxiation) or other issues.

If algae tanks are punctured, the medium inside vents into space and freeze-dries — or, worse, spills into the ship/habitat, flooding nearby modules. After a breach, the atmosphere becomes unbreathable at a rate dependent upon the system’s total volume and biomorphs aboard — usually somewhere in the range of 48–72 hours at full capacity, longer with fewer breathers.

Other life-support functions such as water supplies can also be contaminated or spiked, though these are equally well protected and monitored for quality. Many ships/habs store water reserves in masses of ice, melting it with waste heat as needed. Like food supplies, water can also be nanofabricated, making this an inefficient method of sabotage.

Heat management is an oft-overlooked aspect of life support, especially in space, where there is no atmosphere to radiate it away. Damaging heat exchangers, radiators, thermal regulation systems, or insulation against solar rays can cause dangerous overheating, creating equipment problems and making life for biomorphs unpleasant or impossible.

### Ventilation Systems

All habitats rely on ventilation systems to push and recycle breathable air. These ventways provide an optimal infiltration path for swarmanoids and similar small morphs. For larger transhumans, crawling through ductwork can be an ordeal (taking a complex action to move your base move), or you simply might not fit. These ducts feature regularly spaced fans for circulation. To get past these, the fans must be disabled and removed with Hardware: Industrial skill. Larger fans are not easily removed, but can be stopped so that you can pass through the blades. Many of these fans are monitored and alarmed, however, particularly at key junctions or leading into secure areas. Getting pushed or falling into a fan can inflict from DV 1d10 to 4d10, depending on the size. Swarms that attempt to move through a fan suffer DV 1d10 as well, possibly higher for larger fans.

Many ventilation systems possess countermeasures to deter the spread of harmful toxins or agents. The most common are ultraviolet cooking systems that roast any passing air, killing off biological pathogens. Others include nanofilter systems in which nanobots remove harmful chemicals or particulates from the air. Neither of these is dangerous to transhumans, and both can be deactivated and removed with a Hardware: Industrial Test (though they may be alarmed against tampering).

## Reactors

Large habitats and ships are powered by fusion reactors. If this reactor is taken offline, power reserves will last between 12 and 24 hours in most situations. Some ships/habs have alternate sources such as solar panels to continue powering critical infrastructure.

Due to the threat posed by a meltdown, reactor systems are always air-gapped, hardwired, and well defended. If a hacker somehow manages to access the hardwired controls, bypass security, and disable numerous safety protocols, then initiating a meltdown is a Hacking Test task action with a timeframe of 10 minutes. On ships and some smaller habitats, reactors are more easily physically accessible.

Initiating an emergency safe reactor shutdown takes an Interface Test and a complex action. The actual shutdown process takes 2 action turns. A more gradual safe shutdown (for maintenance and the like) takes 6–12 hours.

Damaging a reactor’s walls is dangerous. If a weapon discharges near a reactor and misses with a superior failure, the attack has struck and possibly damaged the reactor wall. Reactor containments have Armor 50/50, DR 200, a Wound Threshold of 20, and are [selfhealing](#hulls-and-superstructure). If the wall takes enough damage to exceed its DR or suffers a wound, a superheated jet of plasma escapes the magnetic containment and burns anyone within 10 meters who fails a Fray Test (DV 6d10 + 10 \[43\], armor-piercing, resisted with energy armor). The entire area is also flooded with heavy radiation, which is usually lethal to biomorphs.

Plasma breaches are catastrophically bad. Because reactors use controlled fusion, they will never explode like a nuclear weapon, but the super-heated plasma will burn through almost everything around it. Habitat reactors often incorporate pressurized steam systems and turbines; damage to these systems, from a plasma breach or other method, can create a devastating explosion.
