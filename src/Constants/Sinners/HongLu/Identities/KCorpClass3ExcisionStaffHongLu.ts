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

const KCorpClass3ExcisionStaffHongLuDefense: Skill = {
    Name: "Ampule Injection",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [K Corp Ampule] next turn<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/AmpuleInjectionUT4.png'
}

const KCorpClass3ExcisionStaffHongLuSkill1: Skill = {
    Name: "Impede the Intruder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], Coin Power +3<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/ImpedeTheIntruder.png'
}

const KCorpClass3ExcisionStaffHongLuSkill2: Skill = {
    Name: "Decay Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 10+ [Rupture], heal by 50% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 10+ [Rupture] , heal by 50% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/DecayBlade.png'
}

const KCorpClass3ExcisionStaffHongLuSkill3: Skill = {
    Name: "Excise Target",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 80% or more HP, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] Count by the amount of [K Corp Ampule], Deal +5% damage per [K Corp Ampule]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/ExciseTarget.png'
}

export const KCorpClass3ExcisionStaffHongLu: Identity = {
    Id: 10605,
    Name: "K Corp. Class 3 Excision Staff",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 2,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KCorpClass3ExcisionStaffHongLuSkill1, 
            KCorpClass3ExcisionStaffHongLuSkill2, 
            KCorpClass3ExcisionStaffHongLuSkill3, 
            KCorpClass3ExcisionStaffHongLuDefense],
    Passives: [
        new Passive("Regeneration Ampule Activation",
            PassiveTypeEnum.Combat,
            "When hit, if at less than 20% HP, heal by 90% of Max HP and gain 1 [K Corp Ampule].<br>"+
            "After this activates, gain 1 [Fragile] every turn for the rest of the battle. (Once per battle)",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("High-grade Ampule",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give 2 [K Corp Ampule] to 1 ally with the lowest HP percentage.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksung.png',
    PortraitImageDir: './assets/Sinners/HongLu/Identities/KCorpClass3ExcisionStaff/10605gacksunginfo.png'
}