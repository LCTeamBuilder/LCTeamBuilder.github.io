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

const LiuAssocSouthSection4IshmaelDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/Counter.png"
}

const LiuAssocSouthSection4IshmaelSkill1: Skill = {
    Name: "Red Kick",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/RedKick.png"
}

const LiuAssocSouthSection4IshmaelSkill2: Skill = {
    Name: "Frontal Assault",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Burn], inflict +2 [Burn] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/FrontalAssault.png"
}

const LiuAssocSouthSection4IshmaelSkill3: Skill = {
    Name: "Inner Gate Elbow Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] and [Burn] Count, deal +50% damage"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
            new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 3),
            new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Plus Coin Boost] next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/InnerGateElbowStrike.png"
}

export const LiuAssocSouthSection4Ishmael: Identity = {
    Id: 10806,
    Name: "Liu Assoc. South Section 4",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4IshmaelSkill1, 
            LiuAssocSouthSection4IshmaelSkill2, 
            LiuAssocSouthSection4IshmaelSkill3, 
            LiuAssocSouthSection4IshmaelDefense],
    Passives: [
        new Passive("Intense Blaze",
            PassiveTypeEnum.Combat,
            "Deal +10% Blunt damage for every 3 [Burn] Count on target. (Max 30%)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Intense Blaze",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +5% Blunt damage for every 3 [Burn] Count on target. (Max 15%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksunginfo.png"
}