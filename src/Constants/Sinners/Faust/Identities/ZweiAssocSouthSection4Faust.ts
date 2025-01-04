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

const ZweiAssocSouthSection4FaustDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn.")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/GuardUT4.png"
}

const ZweiAssocSouthSection4FaustSkill1: Skill = {
    Name: "Patrolling",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Gain 3 [Defense Level Up]"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Defense Level Up] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/Patrolling.png"
}

const ZweiAssocSouthSection4FaustSkill2: Skill = {
    Name: "Client Protection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 4 [Defense Level Up] to the ally with the lowest HP percentage (3 times per turn)<br>"+
            "At 5+ [Defense Level Up] +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/ClientProtection.png"
}

const ZweiAssocSouthSection4FaustSkill3: Skill = {
    Name: "Law and Order",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Heal 4 HP"),
        new SkillDescriptionPart("Apply 1 [Haste] and 2 [Defense Level Up] to the ally with the lowest HP percentage next turn<br>"+
            "If the ally is a Zwei Association Fixer, apply an additional 1 [Haste], 1 [Defense Level Up]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/LawAndOrder.png"
}

export const ZweiAssocSouthSection4Faust: Identity = {
    Id: 10205,
    Name: "Zwei Assoc. South Section 4",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection4FaustSkill1, 
            ZweiAssocSouthSection4FaustSkill2, 
            ZweiAssocSouthSection4FaustSkill3, 
            ZweiAssocSouthSection4FaustDefense],
    Passives: [
        new Passive("Territory Protection",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the 2 allies adjacent to this unit on the Dashboard.<br>"+
            "If the allies HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Protection Request Received",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, apply 2 [Defense Level Up] to the ally with the lowest HP percentage<br>"+
            "If target's HP is below 50%, apply an additional 2 [Defense Level Up]",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/ZweiAssociationSouthSection4/10205gacksunginfo.png"
}