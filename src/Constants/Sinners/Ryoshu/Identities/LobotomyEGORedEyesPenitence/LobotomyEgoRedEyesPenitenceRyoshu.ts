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
import { LobotomyEgoRedEyesPenitenceRyoshuDefense } from "./LobotomyEgoRedEyesPenitenceRyoshuDefense";
import { LobotomyEgoRedEyesPenitenceRyoshuSkill1 } from "./LobotomyEgoRedEyesPenitenceRyoshuSkill1";
import { LobotomyEgoRedEyesPenitenceRyoshuSkill2 } from "./LobotomyEgoRedEyesPenitenceRyoshuSkill2";
import { LobotomyEgoRedEyesPenitenceRyoshuSkill3 } from "./LobotomyEgoRedEyesPenitenceRyoshuSkill3";
import { LobotomyEgoRedEyesPenitenceRyoshuSkill4 } from "./LobotomyEgoRedEyesPenitenceRyoshuSkill4";

export const LobotomyEgoRedEyesPenitenceRyoshu: Identity = {
    Id: 10410,
    Name: "Lobotomy E.G.O:: Red Eyes & Penitence",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.34,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoRedEyesPenitenceRyoshuSkill1, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill2, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill3, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill4, 
            LobotomyEgoRedEyesPenitenceRyoshuDefense],
    Passives: [
        new Passive("E.G.O Assimilation",
            PassiveTypeEnum.Combat,
            "When gaining [Charge] Count, gain [Red Eyes] or [Penitence] instead<br>"+
            "- [Red Eyes] and [Penitence] are unaffected by [Charge] Potency"),

        new Passive("Spiderhead / Skullface",
            PassiveTypeEnum.Combat,
            "When hitting an enemy with a Coin that gains [Red Eyes]:<br>"+
            "- Deal +([Red Eyes]/2)% more damage<br>"+
            "- If this unit's Speed is faster than the target's by 3 or more, deal an additional +([Red Eyes]/2)% more damage<br>"+
            "- If the target has [Bleed], gain 1 [Red Eyes] (3 times per turn)<br><br>"+

            "When hitting an enemy with a Coin that gains [Penitence]:<br>"+
            "- Deal +([Penitence]/2)% more damage<br>"+
            "- If the target's SP is lower than this unit's, deal an additional +([Penitence]/2)% more damage(targets without SP: their SP counts as 0)<br>"+
            "- At 20+ SP, gain 1 [Penitence] (3 times per turn)<br><br>"+

            "When hit by an enemy, gain 1 [Penitence] (max 3)",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Eat and Sleep",
            PassiveTypeEnum.Support,
            "Combat Start:<br>"+
            "- 1 ally with the lowest HP percentage heals 3 HP<br>"+
            "- 1 ally with the least SP heals 3 SP",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LobotomyEGORedEyesPenitence/10410gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LobotomyEGORedEyesPenitence/10410gacksunginfo.png"
}