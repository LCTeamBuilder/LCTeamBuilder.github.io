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

const HookOfficeFixerHongLuDefense: Skill = {
    Name: "Quickness",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 7+ [Bleed], gain +2 Coin Power<br>"+
            "[On Evade] Gain 1 [Haste] next turn (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/QuicknessUT4.png'
}

const HookOfficeFixerHongLuSkill1: Skill = {
    Name: "Track",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 2+ [Haste], Final Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[Heads Hit] Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/Track.png'
}

const HookOfficeFixerHongLuSkill2: Skill = {
    Name: "Goin' First",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 6+ Speed, Coin Power +1<br>"+
            "[On Use] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] If this unit is faster than the target, inflict [Bleed] Count equal to their Speed difference (Max 4)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/GoinFirst.png'
}

const HookOfficeFixerHongLuSkill3: Skill = {
    Name: "Rampage",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 6+ Speed, Coin Power +1<br>"+
            "Deal more damage based on target's missing HP (+0.5% damage per 1% missing HP)"),
        new SkillDescriptionPart("[Heads Hit] Heal 1 SP per [Bleed] on target (Max 10)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/Rampage.png'
}

export const HookOfficeFixerHongLu: Identity = {
    Id: 10607,
    Name: "Hook Office Fixer",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.38,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [HookOfficeFixerHongLuSkill1, 
            HookOfficeFixerHongLuSkill2, 
            HookOfficeFixerHongLuSkill3, 
            HookOfficeFixerHongLuDefense],
    Passives: [
        new Passive("Hook",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain 1 [Attack Power Up] next turn (Once per turn)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Mass-produced Bionic Gear",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed defeats an enemy inflicted with [Bleed], gain 1 [Attack Power Up] next turn (Once per turn)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksung.png',
    PortraitImageDir: './assets/Sinners/HongLu/Identities/HookOfficeFixer/10607gacksunginfo.png'
}