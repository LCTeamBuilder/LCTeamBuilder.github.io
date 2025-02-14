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

const ZweiAssocSouthSection6SinclairDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/GuardUT4.png'
}

const ZweiAssocSouthSection6SinclairSkill1: Skill = {
    Name: "Baton",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Gain 2 [Protection]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/Baton.png'
}

const ZweiAssocSouthSection6SinclairSkill2: Skill = {
    Name: "Supress",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 6 [Tremor]"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict 2 [Damage Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/Supress.png'
}

const ZweiAssocSouthSection6SinclairSkill3: Skill = {
    Name: "Strong Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +13,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Give 1 [Protection] to the ally with the least HP next turn<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] If target has 5+ [Tremor] upon [Tremor Burst], gain 2 [Protection] next turn<br>"+
            "[On Hit] Inflict 2 [Blunt Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/StrongStrike.png'
}

export const ZweiAssocSouthSection6Sinclair: Identity = {
    Id: 11003,
    Name: "Zwei Assoc. South Section 6",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 88,
    HealthPerLevel: 3.05,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection6SinclairSkill1, 
            ZweiAssocSouthSection6SinclairSkill2, 
            ZweiAssocSouthSection6SinclairSkill3, 
            ZweiAssocSouthSection6SinclairDefense],
    Passives: [
        new Passive("Your Shield",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Power Up] and 1 [Protection] to allies adjacent to this unit on the Dashboard.",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Stubbornness",
            PassiveTypeEnum.Support,
            "1 ally with the least HP takes -10% damage.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksunginfo.png'
}