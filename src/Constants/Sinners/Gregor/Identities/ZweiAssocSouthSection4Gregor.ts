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

const ZweiAssocSouthSection4GregorDefense: Skill = {
    Name: "The Best Defense",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain Shield by (2*[Defense Level Up] on self)<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/TheBestDefenseUT4.png"
}

const ZweiAssocSouthSection4GregorSkill1: Skill = {
    Name: "Standoff",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Defense Level Up]<br>"+
            "[Clash Lose] Gain Shield by (5*[Defense Level Up] on self), Gain 2 [Defense Level Up] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/Standoff.png"
}

const ZweiAssocSouthSection4GregorSkill2: Skill = {
    Name: "Flexible Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Defense Level Up]<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "At 6+ [Defense Level Up], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("At 6+ [Defense Level Up], deal +40% damage", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/FlexibleSuppression.png"
}

const ZweiAssocSouthSection4GregorSkill3: Skill = {
    Name: "Guardian",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 2 [Defense Power Up] and 3 [Defense Level Up] to all allies<br>"+
            "Coin Power +1 per 6 [Defense Level Up] (Max 3)<br>"+
            "At 10+ [Defense Level Up], deal +50% damage"),
        new SkillDescriptionPart("[On Hit] Apply 3 [Defense Level Up] to all allies next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/Guardian.png"
}

export const ZweiAssocSouthSection4Gregor: Identity = {
    Id: 11206,
    Name: "Zwei Assoc. South Section 4",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 90,
    HealthPerLevel: 3,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection4GregorSkill1, 
            ZweiAssocSouthSection4GregorSkill2, 
            ZweiAssocSouthSection4GregorSkill3, 
            ZweiAssocSouthSection4GregorDefense],
    Passives: [
        new Passive("Combat Shield",
            PassiveTypeEnum.Combat,
            "If targeted by 2 or more attacks at the start of the combat phase, gain 2 [Defense Level Up].<br>"+
            "If at 50% or less HP at the start of the combat phase, gain 3 [Defense Level Up].",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Your Shield",
            PassiveTypeEnum.Support,
            "If 1 ally with the highest Max HP is targeted by 2 or more attacks, gain 3 [Defense Level Up]",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/ZweiAssociationSouthSection4/11206gacksunginfo.png"
}