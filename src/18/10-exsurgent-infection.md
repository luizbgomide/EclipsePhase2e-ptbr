# Exsurgent Infection

Use the following rules for exsurgent virus infection.

## Infection Rating

Every sample of the exsurgent virus has its own Infection Rating. This measures its potency and ability to overcome countermeasures and natural defenses, as denoted on the Infection Ratings table. Many strains are adaptive and can improve their own ratings over time.

<blockquote class="table">

### Infection Ratings

| Rating |    Contagion Level     |
| :----: | :--------------------: |
| 30–40  |    Weak or outdated    |
| 50–60  |        Moderate        |
| 70–80  | Strong or cutting-edge |

</blockquote>

## Infection Test

Whenever you are exposed to the exsurgent virus, you must make an opposed test against the Infection Rating. The stat you roll to resist depends on the type of infection. If the exovirus wins the opposed test, you are infected. The exact results depend on the type of infection and specific strain.

If you beat the virus, you have resisted exposure — for now. Repeated exposure beyond the cooldown period may require a new Infection Test, depending on the exovirus type.

<blockquote class="table">

### Infection Test

<!--sort-->

|        Type         | Infection Rating Opposed By  |          Cooldown          |
| :-----------------: | :--------------------------: | :------------------------: |
|    Basilisk Hack    |             INT              | Check 1 action turn–1 hour |
| Biological Pathogen |             SOM              |        Check 1 day         |
|    Digital Virus    |           Firewall           |       1 action turn        |
|     Nanoplague      | No test, infection automatic |             —              |

</blockquote>

<!--sort-->

## Basilisk Hacks

Each type of basilisk hack functions differently.

<!--sort-->

### Blocking Basilisks

If you are on guard or aware that a basilisk hack attempt is imminent, you can attempt to block out the sensory input by closing your eyes, covering your ears, or disabling your AR feeds. This requires a REF Check. If successful, you are quick enough to avoid the effect — as long as you continue to block it out. Operating blind may impose modifiers, and certain circumstances (such as being struck in combat) may require you to make a REF Check again to maintain the block.

### Incapacitators

These basilisks do not infect you, they crash your brain. You suffer SV 1d10 and one of the effects from the Incapacitators table (GM picks or rolls 1d10) for a duration of 1d6 action turns, +1d6 per superior success.

<blockquote class="table">

<!--sort-union-->

### Incapacitators

<!--sort-->

| 1D10 Roll<!--sort-d10--> | Type<!--sort-by-->  | Description                                                                                                                                                                                                                                                                                                             |
| :----------------------: | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|            1             | Cataplexy           | You lose control of your body and collapse. You are [immobilized](../12/21-other-action-factors.md#conditions).                                                                                                                                                                                                         |
|            2             | Catatonic Stupor    | Your brain checks out and is non-responsive. Though conscious, you are mentally “not there” — the basilisk has crashed your brain functions. You are [incapacitated](../12/21-other-action-factors.md#conditions).                                                                                                      |
|            3             | Disorientation      | You gain the [dazed condition](../12/21-other-action-factors.md#conditions).                                                                                                                                                                                                                                            |
|           4–5            | Grand Mal Seizures  | You fall to the ground and convulse, suffering DV 1d6 (armor does not protect). You are [incapacitated and prone](../12/21-other-action-factors.md#conditions). Afterwards, you remain [stunned](../12/21-other-action-factors.md#conditions) for 1d6 action turns.                                                     |
|            6             | Hallucinations      | Your mind wanders off on a mental trip, leaving you disconnected from reality and your physical body. You only respond to the hallucinated reality the GM describes to you.                                                                                                                                             |
|            7             | Impaired Cognition  | Your mental faculties bottom out. You gain the [confused condition](../12/21-other-action-factors.md#conditions).                                                                                                                                                                                                       |
|            8             | Knockout            | You pass out. You are [unconscious](../12/21-other-action-factors.md#conditions) and cannot be woken short of medical intervention.                                                                                                                                                                                     |
|            9             | Nausea/<wbr>Vertigo | You are overcome with head-spinning dizziness and a desire to vomit. You suffer an impaired (−30) modifier.                                                                                                                                                                                                             |
|            10            | Sensory Glitch      | Your brain glitches and you lose access to one or more senses. Roll 1d6; on a 1–3, you gain the [blinded condition](../12/21-other-action-factors.md#conditions), on a 4–6 you gain the [deafened condition](../12/21-other-action-factors.md#conditions). Alternatively the GM may choose other senses to be affected. |

</blockquote>

### Reprogrammers

Sensory reprogramming attacks incapacitate you for a longer period (use the timeframe for the specific strain’s infection period, reduced by superior successes) with the intent of barraging your mind with uninterrupted sensory input. If you are exposed to the basilisk for the duration without interruption, at the end you suffer SV 1d10 and are infected with that strain of the exsurgent virus.

If you are somehow removed from exposure to the basilisk before the duration completes, the reprogramming immediately fails. You suffer SV 1d10 +1 per minute of exposure, and are [stunned](../12/21-other-action-factors.md#conditions) for 1d6 action turns.

**AOK Hacks:** A subset of reprogrammers known as apple of knowledge hacks specifically targets those with specific predesignated skill sets, such as Program or Medicine: Biotech. If you do not have the requisite skills, this basilisk affects you like an incapacitator. If you have the skill(s), however, at the end of the duration you are infected _and_ you become obsessed with creating whatever the virus wishes you to make. Most AOKs drive their victims to create specific nanofab blueprints or mutagenic pathogens (with the intent of creating specific exsurgents), but some compel their targets to build weapons of mass destruction or exotic alien devices. Infectees obsessively ignore everything else beyond basic sustenance — even basic hygiene — until they complete their creation.

### Subliminals

Rather than completely reprogramming you, subliminals plant subconscious commands in your mind, similar to posthypnotic suggestions. Nicknamed “You gotta believe me” attacks, YGBMs are a sort of remote digital brainwashing attempt used to create sleeper terrorists and unknowing collaborators. Unlike the mind-manipulation techniques of psychosurgery, subliminals use shotgun techniques to open the mind, exploiting backdoors in the transhuman brain to download specific pre-set instructions.

Most subliminals re-program their targets immediately; at the GM’s discretion, subliminals with complex instructions or that require accessing the victim’s knowledge/memories may take several action turns or even minutes to complete and are subject to interruption the same as reprogrammers. If you are implanted with a subliminal, make an INT Check; failure means the subliminal is implanted without your knowledge, success means only that you are aware of a brief amount of visual or auditory noise; those inexperienced with basilisks usually suspect nothing but a glitch with the mesh.

Subliminal commands are triggered according to a pre-set time or other predesignated conditions. Once triggered, you carry out the action with the conviction that it is your own idea. Implanted suggestions may be as simple as “kill the Firewall agent” to as complex as “manufacture an explosive device and plant it in the cargo hold of any ship heading to Mars, set to explode one day after they disembark.” Subliminal commands are designed to convert you into a temporary tool or weapon and are not designed to last long. If the conditions have not been met within 1d6 days, the subliminal command dissipates, with the victim none the wiser.

<!--sort-end-->

## Biological Infection

Exsurgent bio-nanobots are transmitted via dermal, inhalation, injection, or oral vectors ([Application Methods](../16/15-chemicals-drugs-and-toxins.md#application-methods)). These pathogens can live outside of a body for extended periods; victims may be exposed by occupying the space where an infected victim was hours or even days before. Whether or not such exposure occurs is largely up to the GM, though a percentage chance can be assigned for people simply passing through an area (10%) or briefly touching infected surfaces (25%). Anyone who makes extended physical contact or exchanges bodily fluids is automatically exposed. Synthmorphs are immune, and some morphs may remain unaffected, particularly those with the [Non-Human Biochemistry trait](../04/28-traits.md#non-human-biochemistry). Medichines and nanophages provide a +10 modifier for the SOM Check when exposed, but toxin filters have no effect.

**Contagion:** Within 12 hours of infection, biomorphs become contagious to others. In most circumstances, they remain contagious until the infection’s transformative effects are complete, though this varies depending on the specific strain.

## Digital Infection

The digital exsurgent virus will attempt to infect other digital mindstates that are locally residing on any systems it is hacked into. It will also attempt to [track](../13/10-tracking.md) and hack into the home systems of any entities that interfere with it or otherwise catch its attention.

To infect an infomorph, cyberbrain, or backup, the exovirus rolls its Infection Rating against the Firewall defending your system. This is a task action with a timeframe dependent upon the particular strain of infection, reduced by superior results. Once an infection is in progress, the only way to stop it is to break the connection between the virus and target, such as by rebooting, moving to another system, or crashing the virus or its account shell in mesh combat. However, the exovirus will automatically seek to keep your connection alive. To break it, you must beat it an opposed Infosec Test (or physically sever the connection).

Digital exsurgent viruses will often attempt to incapacitate their targets first by injecting basilisk hacks into their AR feeds ([Inject AR/Illusion](../13/13-system-subversion.md#inject-arillusion)), thus giving them time to complete an infection unopposed.

**Contagion:** Infected digital minds carry a copy of the exovirus and can use it to infect others.

## Nanoplague Infection

Exsurgent nanoplagues follow the rules given for [nanoswarms](../16/20-nanoswarms-and-microswarms.md), except that they can self-replicate, do not require a hive to sustain them (feeding on nearby matter instead), and can also penetrate a biomorph internally, affecting the body within as well as without.

Any morph that comes into contact with a nanoplague is considered infected. The GM determines when this occurs or uses the options for chance exposure given under the biological pathogen description. Guardian swarms defend against nanoplagues, though such battles are a war of attrition (each losing 5&nbsp;DUR an action turn), with the larger swarm winning. Nanoplagues typically have a DUR of 2d6 × 10. If focused on replenishing its numbers, a nanoplague increases its DUR by its current DUR ÷ 2 every hour, assuming ample matter is available.

**Contagion:** Nanoplague-infected targets are not contagious themselves … usually. However, the infecting nanoplague itself may linger in the original area, hitchhike along to new locations, or split and do both.

<!--sort-end-->

## Infection, Resleeving, & Backups

Depending on the vector/strain of the exsurgent virus, the infection may be mental, physical, or both.

The digital virus and basilisk hacks work by subverting the target’s mind. Once infected, the virus is integrated into your ego. It will be part of your ego if you resleeve, fork, back yourself up, egocast, etc. Any bodies you evacuate with biological brains will not be infected. However, you will likely leave a digital copy of the virus behind in any cyberbrains you evacuate, at the GM’s discretion. Body banks regularly run virus scans, disinfect cyberbrains, and thoroughly reformat them to eliminate vestiges of previous egos.

The biological pathogen and nanoplague variants first infect a victim’s morph. Over time, however, they will also work changes on your mind by physically altering biological brains or subtly reprogramming the mind-states of cyberbrains. How long this takes depends on the particular strain. If you evacuate the morph before this mental reprogramming has taken hold, you may escape the virus’s effects. The morph itself will still be infected, however, and will affect anyone that sleeves into it if it is not purged of the virus. Forks and backups may also be safe, at least until the mind is subverted. Keep in mind, however, that your mind may be infected before you realize it. Cortical stacks removed from an infected morph may be contaminated and may infect others depending on how safely they are handled and sanitized.

If an infected but not-yet-exsurgent mind is removed from a pathogen- or nanoplague-infected body, the mind will remain infected. If sleeved into an uninfected morph, the mental aspects of the virus will continue to run their course, but they will no longer experience the physical aspects.

Infected characters who fully become exsurgents will often take care to bring their infection with them if they resleeve. This sometimes means they will need to infect their new morph.

## Infection and Psychosurgery

Infected minds that have not yet transitioned into full exsurgents can sometimes be saved through psychosurgery ([Remove Infection](../15/06-psychosurgery-procedures.md#remove-infection)). This is an incredibly difficult and dangerous proposition, not in the least because the psychosurgeon may be putting themselves at risk of infection. Even when successful, formerly-infected patients are often saddled with serious trauma.
