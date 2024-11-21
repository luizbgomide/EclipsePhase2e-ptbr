# Flexbot Design

Flexbots are best described as mobile toolkits. They combine two functions—modular design and shape adjusting—to reach the apex of versatility. Each flexbot morph is an amalgamation of one or more modules that combine together into different body plans, functioning as one unit. Modules are specialized towards specific functions, giving multi-module flexbots a wide range of capabilities. All modules are constructed of smart matter and can reshape their form as well as assemble different tools on the fly. Modules may also separate and go independent, either remotely piloted as drones or autonomous under the direction of a fork, another ego, or an ALI. Flexbot morphs can be controlled by a single ego or shared by multiple egos. Modular-capable gear may also be integrated into flexbot forms.

## Default And Aggregate Forms

Every flexbot module has a default shape—typically a quadruped the size of a large dog—but it is not uncommon for operators to alter this form. Users in multi-module flexbots usually adopt a humanoid configuration for familiarity, but a number of pre-configured shape combinations are also popular: quadruped, centaur, spider, crab, and snake, among others. Bot & vehicle frames are also common: car, quadcopter, trike, etc. Flexbot users tend to be keen on taking advantage of their shape-shifting capabilities, so they frequently adopt unusual and bizarre body-plan configurations. Many make a point of changing their shape on a regular basis.

### Size

Individual modules are small sized ([Sizes](../../12/21-other-action-factors.md#sizes) in _EP2_). A flexbot of 3–4 modules is medium sized. Those with 5–9 are large. A flexbot of 10+ modules is very large.

Flexbots composed of 15+ modules are too big to effectively control with a cyberbrain; movement at such sizes also becomes challenging. These massive flexbots require core system cyberbrains like those used in habitats and ships.

### Limbs

While each module has 4 limbs in its default configuration, these limbs are rarely all kept when modules connect together. The act of linking modules together consumes surface area from which limbs can extrude as well as interior structural resources. Most operators retain only the number of limbs they need—perhaps relocating them as their contour demands—and re-absorb the rest.

For rules purposes, each flexbot can have a number of limbs equal to their number of modules × 4 without consuming any shape-adjusting resources. However, GMs may want to reduce this number of available limbs to account for the practicality of module connections and other mobility systems (GM discretion, but reducing by 1–2 per extra module or mobility system is a good benchmark).

### Movement Systems

All flexbot modules are equipped with the capability to walk on 2+ limbs and maneuver on gas-jet thrust-vector systems in micrograv. They may be equipped with additional mobility system ware at the standard costs. They may also use their shape-adjusting capabilities to form mobility systems (including a more efficient Walker 4/20). Note that if each module within a flexbot aggregate does not have the same mobility system, Movement Rate when using that system is halved. This reflects that the morph as a whole is not adapted for that type of movement in terms of contour, distribution of weight and component systems, and other factors. It can use that mobility system, just not to its full capabilities (also note the [Shareware trick](05-flexbot-tricks.md#shareware)).

## Modularity

While modules can operate independently, their true strength comes from melding together. The modular design of flexbots allows modules to be swapped out as needed, so that each flexbot is customized for the task and situation at hand.

The control module that holds the operator’s ego is the starting basis for each flexbot.

### (Dis)Connecting Modules

The control module that holds the operator’s ego is the core of each flexbot. Other modules are added to this core or to other modules already melded with it. Connecting or disconnecting a module takes a complex action. Adding or separating a module affects the aggregate flexbot’s pools, DUR, and AV statistics ([Flexbot Characteristics](#flexbot-characteristics)) and may change its size and movement rate.

**Damaged Modules:** If a module is excessively damaged, removing it can be a challenge. Disconnecting a module that has accumulated damage exceeding its Durability requires a Hardware: Robotics (5 minutes) Test.

### Integration

The process of adding and removing modules impacts the size and functionality of a flexbot. For this reason, the controlling ego must make an [Integration Test](../../15/02-resleeving.md#integration-test) (_EP2_) each time a module is connected or disconnected. If multiple modules are incorporated/separated at once, treat that as a single test.

### Remote Modules

Modules that aren’t physically melded with the flexbot’s form can be remotely controlled ([Remote Operation](../../16/21-robots.md#remote-operations) in _EP2_) just like any other drone. They may also operate autonomously as independent flexbots under the control of an ALI, a fork, or another ego, but they can’t be operated as if they were extensions of the occupant’s morph.

If a module is not physically connected to the flexbot core, is not remotely operated, or is not operating autonomously, then it goes into dormant mode. It cannot be treated as an extension of the flexbot unless it is re-incorporated or remotely operated.

### Bots and Modular Devices

Any robots and gear with [modular design ware](../../16/11-physical-augmentations.md) (_EP2_) may be attached to a flexbot. Due to varying bot sizes, these are handled differently. A single small bot is treated as a module. 5 very small bots count as a single module, but only provide a pool bonus (equal to one bot’s pools) if all 5 bots are of the same type. A medium bot counts as 3 modules, a large bot as 5 modules, and a very large bot as 10 modules. Keep the number of modules these bots count for in mind when calculating average AV scores.

Other morphs that are equipped with modular design ware can also be incorporated as modules. If a bot or morph lacks a cyberbrain or cortical stack, it can’t house an ego nor can it grant pool bonuses.

Gear that is constructed for modular design may also be locked onto flexbot morphs, at the GM’s discretion, using the same rules as spelled out for bots above. Any gear can be upgraded to incorporate modular design; simply increase its Complexity one step (i.e., from Min/1 to Mod/2; see [Modularized Gear](06-upgrades.md#modularized-gear)).

## Flexbot Characteristics

### Pools

A flexbot’s pools equal that of its individual modules, combined.

<blockquote>

A flexbot composed of two crafter modules (Insight 1 each) and a rogue module (Vigor 1) has pools of Insight 2 and Vigor 1.

</blockquote>

### Armor

A flexbot’s Armor Value equals the average of its component modules’ AVs.

<blockquote>

A flexbot is composed of a crafter module (AV 6/4 light frame) and two fighter modules (AV 16/12 light frame + light combat armor). It’s average energy armor is 13 (6 + 16 + 16 = 38; 38 ÷ 3 = 13) and average kinetic armor is 9 (4 + 12 + 12 = 28; 28 ÷ 3 = 9), for a final AV of 13/9.

</blockquote>

### Durability

A flexbot’s Durability equals the combined DUR of its modules. Wound Threshold equals DUR ÷ 5 and Death Rating equals DUR × 2.

<blockquote>

A flexbot composed of a fighter (DUR 30), rogue (DUR 20), and wizard (DUR 20) has a Durability of 70. Its Wound Threshold is 14 (70 ÷ 5) and Death Rating is 140 (70 × 2).

</blockquote>

**Optional Durability Rule:** In some games, flexbots with a high number of modules may get out of hand with their high DUR scores. To balance this out, only apply half of each module’s DUR score after the first core module. In the example above, the fighter-rogue-wizard flexbot would have a DUR of 50 (30 + 10 + 10). Note that this can lead to some complications when assigning damage taken to individual modules, since the flexbot’s DUR is lower than the total of its individual modules. Treat each module as having a reduced DUR until it separates; once removed, its DUR resets to normal but the damage it received also doubles.

### Traits and Ware Bonuses

Note that morph traits and ware are bought for individual modules, not for the flexbot morph as a whole.

Bonuses from some traits, ware, and armor mods only apply to the morph as a whole if every module in the flexbot has them; use common sense and GM discretion. For example, if only one of a flexbot’s four modules has chameleon skin ware or a lotus armor mod, it does not make sense for the entire morph to gain a bonus for infiltration or against liquid attacks, since only a quarter of it is affected. If a single module has a hardware prehensile tail, however, it could conceivably use that tail to aid the balance of the entire flexbot. Ware such as medichines would only repair the module that has it equipped, not the others. Meshware such as mind amp should only apply if that module’s cyberbrain is used to control the morph. Likewise, morph traits such as Acumen or Enhanced Behavior only affect the flexbot as a whole if the controlling ego is based in that module.
