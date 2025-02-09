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

const SevenAssocSouthSection6YiSangDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/GuardUT4.png'
}

const SevenAssocSouthSection6YiSangSkill1: Skill = {
    Name: "Flèche",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/Fleche.png'
}

const SevenAssocSouthSection6YiSangSkill2: Skill = {
    Name: "Riposte",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Inflict 3 [Paralyze] next turn<br>"+
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/Riposte.png'
}

const SevenAssocSouthSection6YiSangSkill3: Skill = {
    Name: "Moulinet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] +1 to the value of effect applied by the last Coin", 1),
        new SkillDescriptionPart("[On Hit] +1 to the value of effect applied by the last Coin", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Pierce Fragility] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/Moulinet.png'
}

export const SevenAssocSouthSection6YiSang: Identity = {
    Id: 10102,
    Name: "Seven Assoc. South Section 6",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 5,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6YiSangSkill1, 
            SevenAssocSouthSection6YiSangSkill2, 
            SevenAssocSouthSection6YiSangSkill3, 
            SevenAssocSouthSection6YiSangDefense],
    Passives: [
        new Passive("Acute Studies",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -2 Clash Power.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Observational Eye",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains +1 Clash Power in a clash.",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/SevenAssociationSouthSection6/10102gacksunginfo.png'
}