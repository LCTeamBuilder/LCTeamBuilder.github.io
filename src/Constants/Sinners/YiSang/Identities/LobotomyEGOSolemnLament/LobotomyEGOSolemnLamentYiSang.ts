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
import { LobotomyEGOSolemnLamentYiSangDefense } from "./LobotomyEGOSolemnLamentYiSangDefense";
import { LobotomyEGOSolemnLamentYiSangSkill1 } from "./LobotomyEGOSolemnLamentYiSangSkill1";
import { LobotomyEGOSolemnLamentYiSangSkill2 } from "./LobotomyEGOSolemnLamentYiSangSkill2";
import { LobotomyEGOSolemnLamentYiSangSkill3 } from "./LobotomyEGOSolemnLamentYiSangSkill3";

export const LobotomyEGOSolemnLamentYiSang: Identity = {
    Id: 10110,
    Name: "Lobotomy E.G.O::Solemn Lament",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30, 15],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEGOSolemnLamentYiSangSkill1, 
            LobotomyEGOSolemnLamentYiSangSkill2, 
            LobotomyEGOSolemnLamentYiSangSkill3, 
            LobotomyEGOSolemnLamentYiSangDefense],
    Passives: [
        new Passive("ISeeTheDyingButterfly.",
            PassiveTypeEnum.Combat,
            "Begin encounters with 10 of each of [The Living & The Departed].<br><br>"+

            "When consuming [The Living & The Departed], select randomly between The Living(Potency) and The Departed(Count) for each [The Living & The Departed] value.<br><br>"+

            "When inflicting [Butterfly], inflict the same amount of The Living and The Departed as they were consumed. Example Below:<br>"+
            "- If this unit consumed X Living, inflict X Living<br>"+
            "- If this unit consumed Y Departed, inflict Y Departed<br><br>"+

            "If this unit runs out of [The Living & The Departed] midway through Skill use, cancel all subsequent Coins and [Reload]<br><br>"+

            "When [Reload]ing, or when gaining [The Living & The Departed], gain either The Living or The Departed based on this unit's current SP<br>"+
            "- At 0 or higher SP: 30% chance to gain The Living, 70% chance to gain The Departed.<br>"+
            "- At less than 0 SP: 70% chance to gain The Living, 30% chance to gain The Departed.<br>"+
            "- The probabilities are calculated separately for each ammo consumed."),

        new Passive("Fire.IShallFire.",
            PassiveTypeEnum.Combat,
            "After Attack: If this unit killed the target with its Skill, [Reload]<br>"+
            "When this unit gains [The Living & The Departed], gain 2 [Haste] next turn (once per turn)",
            [{ sin: SinEnum.Gloom, amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Hand of Salvation",
            PassiveTypeEnum.Support,
            "When an ally hits with a Skill: consume 2 [Sinking] on the target to inflict them with 1 [Butterfly] (3 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 6}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/LobotomyEGOSolemnLament/10110gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/LobotomyEGOSolemnLament/10110gacksunginfo.png"
}