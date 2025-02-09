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

const LiuAssocSouthSection4RyoshuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/GuardUT4.png'
}

const LiuAssocSouthSection4RyoshuSkill1: Skill = {
    Name: "All-out War",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Clash Power +1<br>"+
            "If the target has 10+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/AlloutWar.png'
}

const LiuAssocSouthSection4RyoshuSkill2: Skill = {
    Name: "Fiery Knifehand",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Clash Power +1<br>"+
            "If the target has 6+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Burn], deal +50% damage", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/FieryKnifehand.png'
}

const LiuAssocSouthSection4RyoshuSkill3: Skill = {
    Name: "Flame Cleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Clash Power +1<br>"+
            "If the target has 6+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] If the target has 10+ [Burn], deal +40% damage", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/FlameCleave.png'
}

export const LiuAssocSouthSection4Ryoshu: Identity = {
    Id: 10407,
    Name: "Liu Assoc. South Section 4",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4RyoshuSkill1, 
            LiuAssocSouthSection4RyoshuSkill2, 
            LiuAssocSouthSection4RyoshuSkill3, 
            LiuAssocSouthSection4RyoshuDefense],
    Passives: [
        new Passive("Flame Spread",
            PassiveTypeEnum.Combat,
            "When this unit defeats an enemy with [Burn], apply 4 [Burn] to 2 random enemies with no [Burn] or with the least Burn Potency. (Once per turn)<br>"+
            "- In Focused Encounters, to 2 randoms Parts",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Spread Flame",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Speed defeats an enemy with [Burn], inflict 3 [Burn] on 2 random enemies (Once per turn)<br>"+
            "- In Focused Encounters, on 2 random Parts",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksung.png',
    PortraitImageDir: './assets/Sinners/Ryoshu/Identities/LiuAssociationSouthSection4/10407gacksunginfo.png'
}