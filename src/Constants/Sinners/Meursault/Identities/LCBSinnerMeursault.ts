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

const LCBSinnerMeursaultDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/GuardUT4.png"
}

const LCBSinnerMeursaultSkill1: Skill = {
    Name: "Un, Deux",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/UnDeux.png"
}

const LCBSinnerMeursaultSkill2: Skill = {
    Name: "Nailing Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Use] Gain 3 [Defense Power Up] next turn"),            new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/NailingFist.png"
}

const LCBSinnerMeursaultSkill3: Skill = {
    Name: "Des Coups",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[On Use] Gain 3 [Protection] next turn"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 3),            new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/LCBSinner/DesCoups.png"
}

export const LCBSinnerMeursault: Identity = {
    Id: 10501,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 90,
    HealthPerLevel: 3.1,
    SpeedMin: 2,
    SpeedMax: 3,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [LCBSinnerMeursaultSkill1, 
            LCBSinnerMeursaultSkill2, 
            LCBSinnerMeursaultSkill3, 
            LCBSinnerMeursaultDefense],
    Passives: [
        new Passive("Staunchness",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Sloth , amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Backup",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP takes -10% damage from attack skills.",
            [{ sin: SinEnum.Sloth, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/LCBSinner/10501normal.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/LCBSinner/10501normalinfo.png"
}