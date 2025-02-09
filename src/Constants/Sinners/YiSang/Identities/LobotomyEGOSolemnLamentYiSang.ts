import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const LobotomyEGOSolemnLamentYiSangDefense: Skill = {
    Name: "FromTheCoffinAButterflyTakesFlight",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] [Reload] (once per turn)<br>"+
        "[Combat Start] Gain Shield equal to (the sum of both [Butterfly] on the selected target)% HP. (max 20% per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/10110044.png'
}

const LobotomyEGOSolemnLamentYiSangSkill1: Skill = {
    Name: "Celebration for the Departed",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
        "If the sum of the target's [Sinking] and both [Butterfly] is 6 or higher, Coin Power +1<br>"+
        "[Clash Win] Inflict +2 [Sinking] Count", 0),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011001.png'
}

const LobotomyEGOSolemnLamentYiSangSkill2: Skill = {
    Name: "Solemn Lament for the Living",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
        "Coin Power +1 for every 6 value of the sum of the target's [Sinking] and both [Butterfly] (max 2)<br>"+
        "[Clash Win] Inflict +1 [Sinking] Count<br>"+
        "[After Attack] Gain (highest Reson.) of [The Living & The Departed] (Max 6)<br>"+
        "- If the said Reson. was an A-Reson., gain (highest Reson. x 2) [The Living & The Departed] (max 12)<br>"+
        "- If the said Reson. was at 4+ A-Reson., [Reload] instead", 0),
        new SkillDescriptionPart("Consume 5 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011002.png'
}

const LobotomyEGOSolemnLamentYiSangSkill3: Skill = {
    Name: "Goodbye Now, A Sorrow In You",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every 5 value of [The Living & The Departed] (max 4)<br>"+
        "Coin Power +1 for every 6 value of the sum of the target's [Sinking] and both [Butterfly] (max 2)<br>"+
        "[Clash Win] Inflict +3 [Sinking] Count<br>"+
        "[After Attack] [Reload]"),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 6 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2),
        new SkillDescriptionPart("Consume all of [The Living & The Departed] on self<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed<br>"+
        "[On Hit] Deal +4% more damage for every value of [The Living & The Departed] consumed by this Skill", 3),
        new SkillDescriptionPart('[On Hit] Inflict Gloom Damage equal to "All" [Butterfly] on the target<br>'+
        '- "All" = the sum of both The Living and The Departed on the target', 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011003.png'
}

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
    FullImageDir: './assets/Sinners/YiSang/Identities/LobotomyEGOSolemnLament/10110gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/LobotomyEGOSolemnLament/10110gacksunginfo.png'
}