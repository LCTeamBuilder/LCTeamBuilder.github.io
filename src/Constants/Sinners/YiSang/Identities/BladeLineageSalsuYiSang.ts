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

const BladeLineageSalsuYiSangDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("+70% Damage on Critical Hit", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/BladeLineageSalsu/Counter.png"
}

const BladeLineageSalsuYiSangSkill1: Skill = {
    Name: "Striker's Stance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/BladeLineageSalsu/StrikersStance.png"
}

const BladeLineageSalsuYiSangSkill2: Skill = {
    Name: "Heel Turn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Gain +2 [Poise] Count next turn")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/BladeLineageSalsu/HeelTurn.png"
}

const BladeLineageSalsuYiSangSkill3: Skill = {
    Name: "Flank Trust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Poise]"),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Poise] next turn", 1),
        new SkillDescriptionPart("+70% Damage on Critical Hit", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/BladeLineageSalsu/FlankThrust.png"
}

export const BladeLineageSalsuYiSang: Identity = {
    Id: 10103,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuYiSangSkill1, 
                BladeLineageSalsuYiSangSkill2, 
                BladeLineageSalsuYiSangSkill3, 
                BladeLineageSalsuYiSangDefense],
    Passives: [
        new Passive("Poised",
            PassiveTypeEnum.Combat,
            "On clash win, gain +1 [Poise] Count.<br>"+
            "Coin Power +1 For every 5 [Poise] Count. (Max 3)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Bestow",
            PassiveTypeEnum.Support,
            "1 ally with the most SP gains +1 [Poise] Count from skills.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/BladeLineageSalsu/10103gacksunginfo.png"
}