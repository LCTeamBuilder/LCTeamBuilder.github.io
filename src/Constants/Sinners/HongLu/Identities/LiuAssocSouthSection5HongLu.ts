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

const LiuAssocSouthSection5HongLuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/GuardUT4.png"
}

const LiuAssocSouthSection5HongLuSkill1: Skill = {
    Name: "Warm Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Heal 3 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/WarmUp.png"
}

const LiuAssocSouthSection5HongLuSkill2: Skill = {
    Name: "Flowing Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn], if target already has [Burn], inflict 1 more", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count, at 30+ SP, inflict 1 more, at 45+ SP, inflict 2 more", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/FlowingFlame.png"
}

const LiuAssocSouthSection5HongLuSkill3: Skill = {
    Name: "Crimson Blaze Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn], if target already has [Burn], inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Heal 6 SP<br>"+
            "[On Hit] If target has 6+ [Burn] Count, raise Stagger Threshold by 30% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/CrimsonBlazeFist.png"
}

export const LiuAssocSouthSection5HongLu: Identity = {
    Id: 10604,
    Name: "Liu Assoc. South Section 5",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection5HongLuSkill1, 
            LiuAssocSouthSection5HongLuSkill2, 
            LiuAssocSouthSection5HongLuSkill3, 
            LiuAssocSouthSection5HongLuDefense],
    Passives: [
        new Passive("Flaring Up",
            PassiveTypeEnum.Combat,
            "At 30+ SP, inflict +1 [Burn] Count with the effects of attack Skills/Coins.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Isn't It Warm?",
            PassiveTypeEnum.Support,
            "1 ally with the most SP inflicts +1 [Burn] Count with the effects of their attack Skills/Coins.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/LiuAssociationSouthSection5/10604gacksunginfo.png"
}