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

const LiuAssocSouthSection6GregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/GuardUT4.png'
}

const LiuAssocSouthSection6GregorSkill1: Skill = {
    Name: "Single-point Stab",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 B[urn<br>"+
            "[Heads Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>"+
            "[Heads Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/SinglepointStab.png'
}

const LiuAssocSouthSection6GregorSkill2: Skill = {
    Name: "Rush Down",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]<br>"+
            "[On Hit] If target has 6+ [Burn], gain 1 [Attack Power Up] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/RushDown.png'
}

const LiuAssocSouthSection6GregorSkill3: Skill = {
    Name: "Perfected Palm Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn], deal +10% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/PerfectedPalmStrike.png'
}

export const LiuAssocSouthSection6Gregor: Identity = {
    Id: 11202,
    Name: "Liu Assoc. South Section 6",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection6GregorSkill1, 
            LiuAssocSouthSection6GregorSkill2, 
            LiuAssocSouthSection6GregorSkill3, 
            LiuAssocSouthSection6GregorDefense],
    Passives: [
        new Passive("Ignition",
            PassiveTypeEnum.Combat,
            "The 3rd and subsequent Coins of a skill inflict 1 [Burn] on hit.",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rushing Heart",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +30% damage with their 4th and subsequent Coins.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/LiuAssociationSouthSection6/11202gacksunginfo.png'
}