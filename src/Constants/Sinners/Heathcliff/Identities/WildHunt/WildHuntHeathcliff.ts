import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { WildHuntHeathcliffDefense } from "./WildHuntHeathcliffDefense";
import { WildHuntHeathcliffSkill1 } from "./WildHuntHeathcliffSkill1";
import { WildHuntHeathcliffSkill2 } from "./WildHuntHeathcliffSkill2";
import { WildHuntHeathcliffSkill3 } from "./WildHuntHeathcliffSkill3";
import { WildHuntHeathcliffSkill4 } from "./WildHuntHeathcliffSkill4";

export const WildHuntHeathcliff: Identity = {
    Id: 10710,
    Name: "Wild Hunt",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WildHuntHeathcliffSkill1,
            WildHuntHeathcliffSkill2,
            WildHuntHeathcliffSkill3,
            WildHuntHeathcliffSkill4,  
            WildHuntHeathcliffDefense],
    Passives: [
        new Passive("Dullahan",
            PassiveTypeEnum.Combat,
            "- Turn Start: if this unit has [Dullahan], mount [Dullahan]<br>"+
            "- Lose 5 SP every time this unit mounts [Dullahan]<br>"+
            "- If 3+ allies have been defeated in this Encounter, gain [Dullahan] next turn. (once per Encounter)<br>"+
            "- If this unit gets Staggered due to damage or raised Stagger Threshold when mounting [Dullahan], recover from Stagger. If the Stagger is something that cannot be naturally recovered from, this unit does not mount [Dullahan].<br><br>"+

            "- Gain 1 [Coffin] when killing the target."),

        new Passive("Call of the Erlking",
            PassiveTypeEnum.Combat,
            "- Deal +1% more damage for every 1 [Sinking] on target (max 15%)<br><br>"+
            
            "- When, during combat, 1 ally takes damage that would kill them, consume 2 [Coffin] to apply [Wild Hunt] to them (2 times per turn)<br><br>"+

            "- Apply 2 [Damage Up] next turn to the ally with [Wild Hunt]<br>"+
            "- If the said ally is from Wuthering Heights or Edgar Family, apply 1 [Attack Power Up] next turn as well",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Endless Lamentation",
            PassiveTypeEnum.Support,
            "1 ally with the highest SP deals +5% more damage to targets with less than 0 SP<br>"+
            "If the target has less than 0 SP: deal even more damage the further the target's SP is from 0 (+0.5% more damage per SP, max 20%)<br>"+
            "If the target does not have SP, the said ally inflicts +1 more [Sinking] Potency and Count with their Skill and Coin Effects of their Attack Skills (2 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/WildHunt/10710gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/WildHunt/10710gacksunginfo.png"
}