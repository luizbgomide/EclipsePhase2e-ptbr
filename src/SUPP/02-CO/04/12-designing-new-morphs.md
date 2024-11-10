# Designing New Morphs

If you’re thinking of designing your own morphs, the process is fairly easy. You may be looking to fill a niche the existing morphs don’t cover, provide some unique morphs for story purposes, or just tweak some of the options so that they don’t become stale. There are two methods you can pursue: modifying the stats of an existing morph design or calculating one from scratch.

## Using Existing Morphs To Create New Ones

The easiest way to design a new morph is to take an existing model and tweak it. Due to the formula we use to calculate morph costs, there are a few ways to easily alter a morph’s stats and calculate its new MP. However, there are also a few rules of thumb you should keep in mind.

### Adjusting Pools

If you take an existing morph and switch the pool points around, without changing the total number of pool points, the MP cost will stay the same. For example, if you took a morph with 2 Insight and changed it to have 2 Moxie instead, the MP would not change.

If you raise or lower the total number of pool points, the MP goes up or down by 1 for every 2 pool points. So if you take a morph with 2 Insight (total 2 points) and add 1 Vigor and 1 Flex (+2 pool points), that will increase the MP by 1. The same works in reverse. If you took a remade morph but dropped it’s 2 Vigor, it would cost 6 MP instead of 7.

Keep in mind that few morphs have any single pool higher than 4, and the total number of pool points is usually between 3 and 8.

Pool bonuses from ware do not count towards these totals; that cost is incorporated into the ware’s cost.

### Adjusting Durability

A DUR of 35 is considered the baseline. A morph with a DUR 10 higher (45) or lower (25) than this will have an MP that is 1 higher or lower respectively.

Wound Threshold is always equal to DUR ÷ 5. Death Rating is DUR x 1.5 for biomorphs and DUR x 2 for synthmorphs.

DUR bonuses from ware do not count towards these totals; that cost is incorporated into the ware’s cost.

### Adjusting Ware

For every 4 GP worth of ware added or subtracted, increase or decrease (respectively) the MP by 1. So adding 2 Minor complexity wares (1 GP each, 2 GP total) plus 1 Moderate complexity ware (2 GP more, 4 GP total) would increase the MP by 1.

### Adjusting Morph Traits

For every 4 CP worth of traits added or subtracted, increase or decrease (respectively) the MP by 1. Negative traits in particular are a good way to balance out a morph’s cost.

<blockquote class="table">

### Quick MP Adjustments

| Alteration            | MP Change |
| :-------------------- | :-------- |
| +2 total pool points  | +1 MP     |
| −2 total pool points  | −1 MP     |
| +10 DUR               | +1 MP     |
| −10 DUR               | −1 MP     |
| +4 GP of ware         | +1 MP     |
| −4 GP of ware         | −1 MP     |
| +4 CP of morph traits | +1 MP     |
| −4 CP of morph traits | −1 MP     |

</blockquote>

## Designing New Morphs by Formula

To create a morph from scratch: follow the steps and formula on the [Morph Design Steps and Costs table](#morph-design-steps-and-costs). Every pool point, ware, trait, and deviation from DUR adds to the total CP cost.

Modifications to pools or DUR that come from ware do not count towards CP totals (they are already incorporated into the ware cost).

## Design Considerations

The most important thing to keep in mind when designing a morph is that the stats that you are giving it match the actual design and intent for the morph. Avoid the temptation to pump up the stats just to optimize your character. The easiest way to do this is to compare it to equivalent morphs.

There are a few special considerations to keep in mind when designing a new morph:

### Durability

New morph designs start with a Durability of 35; adjustments raise or lower the CP cost as noted. Scores should reﬂect the size and toughness of the morph, keeping within a range of 25 for small morphs to 65 for very large. The average DUR for medium-sized biomorphs is 35, 40 for synthmorphs.

Wound Threshold is always equal to DUR ÷ 5. Death Rating is DUR x 1.5 for biomorphs and DUR x 2 for synthmorphs.

### Pools

Pools reflect the morph’s transhuman capabilities: enhanced intelligence/ wisdom (Insight), charisma/willpower (Moxie), quickness/ fitness (Vigor), and overall utility (Flex). Your pool points should fit the morph’s design purposes.

Your total pool points for a morph should range between 1 and 8, with most being in the 3–5 range. Pods generally have slightly lower pools (reflecting that they are produced more cheaply and quickly). Biomorphs are generally given more points than synthmorphs to balance out the inherent advantages that shells have.

### Common Traits

Don’t forget to consider the various morph traits when putting your morph idea together. Two traits in particular should be looked at:

**Exotic Morphology:** Any morph that is not biological and humanoid should have this trait. The level depends on how divergent the morph is from an average human body plan and general morphology. Close to humanoid (like a neo-chimp or case) is Level 1. Partly humanoid (like a slitheroid) is Level 2. Not-at-all humanoid (like a neo-octopus or flexbot) is Level 3. Compare with existing morphs when assigning.

**Non-Human Biochemistry:** Any biomorph (including pods and uplifts) that is not human or that incorporates significant amounts of transgenic characteristics should have this trait. Morphs based on terrestrial mammals should have it at Level 1, anything else (alien or non-mammalian) should be Level 2.

### Ware

Most of the morphs listed in _EP2_ are given the minimum amount of ware necessary to fill their niche. This helps to keep the costs down while also giving more room to the players to customize their characters’ morphs as they see fit. If you are designing a morph that is intended to be a widely available model, keep that minimalism in mind.

In particular, most of the existing morphs steer away from any ware that increases pools or Durability. This is partly to keep things simple and avoid confusion over stats. If you are designing a bespoke or unique morph, this is less of a concern.

If you do include ware that provides bumps to pools or Durability, keep in mind that those bumps are already incorporated into the ware’s cost; don’t pay for them twice.

If your morph is based on an existing creature, make sure that the ware reflects that creature’s inherent characteristics, senses, etc. For example, birds likely have wings, direction sense, and either polarization or enhanced vision.

### Biomorphs

The default ware package for biomorphs includes Biomods, Cortical Stack, and Mesh Inserts (a total of 3 Minor complexity wares/3 GP). Unless you are going for something different, every biomorph (including pods and uplifts) should have these.

### Pods

Every pod also has a cyberbrain (a Major ware/3 GP), which also includes access jacks, mnemonics, and a puppet sock for free. This is the defining characteristic of pods, so all should have it.

### Synthmorphs

Synthmorphs also have the cyberbrain and the free ware that comes it, just like pods. This is a necessity for every synthmorph (unless they have a brain box). Almost all synthmorphs are equipped with either lidar or radar to move without collisions.

Every synthmorph must also choose a frame. This provides it with an inherent Armor Value and the [synthmorph characteristics](../../../04/25-synthmorphs.md#synthmorph-characteristics) detailed on _EP2_. Each frame has a CP cost. The frame options are:

- **Light Frame (2 CP trait):** AV 6/4
- **Medium Frame (4 CP trait):** AV 8/6
- **Heavy Frame (6 CP trait):** AV 12/10

### Infomorphs and Core Morphs

Infomorphs all have mnemonics ware and both the Digital Speed and Exotic Morphology (Level 3) traits. They also have no use for Vigor pool. Core morphs are the same as infomorphs, and they also must have the core system ware (at no cost).

### Mobility Systems

Every morph (except for infomorphs) has at least one default method of movement for free (usually Walker 4/20). Most other [mobility systems](../../../16/11-physical-augmentations.md) (_EP2_) are added as ware at a Moderate complexity/2 GP cost. However, some discretion is necessary here. In some cases, we have applied additional movement rates (a slitheroid’s roll, an aquanaut’s swim) at no extra cost, as it is already within the morph’s inherent capabilities.

The specific Movement Rate is largely up to the GM based on common sense. The [Movement Types](../../../12/24-movement.md#movement-types) listed on _EP2_, each list a default suggested rate.

### Body Plan and Limbs

Your morph’s overall morphology is only limited by your imagination. You want a spider eel synthmorph with 5 radial legs, a single arm in the chest, and 2 tentacle arms? No problem. Just try and keep your designs within transhuman capabilities as hinted at within _Eclipse Phase_.

Morphs can have up to 4 limbs at no cost. As a general rule, each pair of extra limbs beyond that is counted as Minor complexity ware/1 GP. However, we recommend only counting limbs that are prehensile and can be used to hold, grab, and manipulate objects (i.e., arms, not legs).

### Special Attacks

Your morph’s design may include components that can be wielded as natural (or built-in) weapons. These should be counted as Minor or Moderate ware (1 or 2 GP), depending on the attack’s statistics. Use existing listed weapons as a baseline.

### Converting the CP Total into Final MP Cost

Once you have the total amount of CP, divide by 4 to get the final MP Cost. For best results, try to keep your total CP value as a multiple of 4. For example, if your total is 18, considering dropping a pool point (−2 CP) or adding a piece of Moderate ware (+2 CP) to get it to 16 or 20. If you end up with a fraction, round normally (i.e., .5 and higher is rounded up).

This division to a quarter of the CP total is made under the assumption that the morph is a mass-produced model created by established morph-design outfits, meaning that the volume and scale of the design and production help to reduce the costs. If you are designing a morph that is not widely available and is otherwise bespoke or unique, then you should consider dividing the total CP by only 2 or 3 or simply add a few extra points to the final MP cost.

<blockquote class="table">

### Morph Design Steps and Costs

| Step                                          |                                                                                        |                 CP Cost |
| :-------------------------------------------- | :------------------------------------------------------------------------------------- | ----------------------: |
| <p class="no-wrap">**1. Set Pools.**</p>      | The default pools are 0.                                                               |                         |
|                                               | <p class="indent">» Each pool point</p>                                                |                      +2 |
| <p class="no-wrap">**2. Set Durability.**</p> | The default DUR is 35. Calculate WT and DR.                                            |                         |
|                                               | <p class="indent">» Every 5 points above DUR 35</p>                                    |                      +2 |
|                                               | <p class="indent">» Every 5 points below DUR 35</p>                                    |                      −2 |
| <p class="no-wrap">**3. Choose Traits.**</p>  | Take special note of Exotic Morphology, Non-Human Biochemistry, and synthmorph frames. |                         |
|                                               | <p class="indent">» Traits</p>                                                         | Per Trait CP Cost/Bonus |
| <p class="no-wrap">**4. Add Ware.**</p>       | Take note of default ware for that type of morph.                                      |                         |
|                                               | <p class="indent">» Each Minor complexity ware</p>                                     |                      +1 |
|                                               | <p class="indent">» Each Moderate complexity ware</p>                                  |                      +2 |
|                                               | <p class="indent">» Each Major complexity ware</p>                                     |                      +3 |
| <p class="no-wrap">**5. Total CP.**</p>       | Total all CP spent in Steps 1–4.                                                       |                         |
|                                               | Divide by 4 to get the final MP Cost of the morph.                                     |                         |

</blockquote>
