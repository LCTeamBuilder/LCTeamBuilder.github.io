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

const SevenAssocSouthSection6DirectorOutisDefense: Skill = {
    Name: "I'll Take the Lead",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 13,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Haste] and 1 [Defense Power Up] next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/IllTakeTheLeadUT4.png'
}

const SevenAssocSouthSection6DirectorOutisSkill1: Skill = {
    Name: "Predictive Analysis",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/PredictiveAnalysis.png'
}

const SevenAssocSouthSection6DirectorOutisSkill2: Skill = {
    Name: "Field Command",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/FieldCommand.png'
}

const SevenAssocSouthSection6DirectorOutisSkill3: Skill = {
    Name: "Exploit the Gap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power<br>"+
            "If target has 7+ [Rupture], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Deal bonus Slash damage by 15% of damage dealt<br>"+
            "[On Hit] Inflict [Weakness Analyzed] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/ExploitTheGap.png'
}

export const SevenAssocSouthSection6DirectorOutis: Identity = {
    Id: 11104,
    Name: "Seven Assoc. South Section 6 Director",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6DirectorOutisSkill1, 
            SevenAssocSouthSection6DirectorOutisSkill2, 
            SevenAssocSouthSection6DirectorOutisSkill3, 
            SevenAssocSouthSection6DirectorOutisDefense],
    Passives: [
        new Passive("Grasping Vulnerabilities",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" to, deal +10% damage.',
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Relay Intelligence",
            PassiveTypeEnum.Support,
            '1 ally with the highest Speed deals +10% damage when attacking a target with a damage type the target is "Weak" or "Fatal" to.',
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksunginfo.png'
}