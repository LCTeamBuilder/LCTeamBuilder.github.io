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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const FanghuntOfficeFixerHongLuDefense: Skill = {
    Name: "Emergency Styptics",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Lose 2 [Bleed] Potency on self (3 times per turn. If [Bleed] Potency drops to 0 or less, the [Bleed] effect expires)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/EmergencyStypticsUT4.png"
}

const FanghuntOfficeFixerHongLuSkill1: Skill = {
    Name: "Slam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/Slam.png"
}

const FanghuntOfficeFixerHongLuSkill2: Skill = {
    Name: "Bonecrusher",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] or [Rupture] Count, instead, gain Coin Power +1<br>"+
            "- If the target is a &ltBloodfiend&gt or a &ltBloodbag&gt, gain an additonal Coin Power +1<br>"+
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[Heads Hit] Inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [HP Healing Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/Bonecrusher.png"
}

const FanghuntOfficeFixerHongLuSkill3: Skill = {
    Name: "A Cheerful Hunt's End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] or [Rupture] Count, instead, gain Coin Power +1<br>"+
            "- If the target is a &ltBloodfiend&gt or a &ltBloodbag&gt, gain an additonal Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 15+ [Rupture], or has less than 30% HP, Reuse this Coin (once per Skill)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/ACheerfulHuntsEnd.png"
}

export const FanghuntOfficeFixerHongLu: Identity = {
    Id: 10610,
    Name: "Fanghunt Office Fixer",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [FanghuntOfficeFixerHongLuSkill1, 
            FanghuntOfficeFixerHongLuSkill2, 
            FanghuntOfficeFixerHongLuSkill3, 
            FanghuntOfficeFixerHongLuDefense],
    Passives: [
        new Passive("How to Hunt Cheerfully",
            PassiveTypeEnum.Combat,
            "If the target is a &ltBloodfiend&gt, &ltBloodbag&gt, or if the target has 10+ [Rupture], deal +10% more damage<br>"+
            "On Skill Use, if this unit has [Bleed], inflict 3 [Rupture] On Hit (2 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bloodfiend Hunting Manual - Styptics",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the highest sum of [Bleed] Potency and Count loses 2 [Bleed] Count<br>"+
            "When 1 ally with the fastest Speed hits an enemy with [Rupture], inflict 1 [Defense Level Down] (2 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/FanghuntOfficeFixer/10610gacksunginfo.png"
}