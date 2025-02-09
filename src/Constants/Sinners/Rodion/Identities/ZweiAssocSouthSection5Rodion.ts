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

const ZweiAssocSouthSection5RodionDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ZweiAssociationSouthSection5/GuardUT4.png'
}

const ZweiAssocSouthSection5RodionSkill1: Skill = {
    Name: "Careful Obstruction",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ZweiAssociationSouthSection5/CarefulObstruction.png'
}

const ZweiAssocSouthSection5RodionSkill2: Skill = {
    Name: "Focused Defense",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 15+ shield, gain +2 [Poise] Count<br>"+
            "[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ZweiAssociationSouthSection5/FocusedDefense.png'
}

const ZweiAssocSouthSection5RodionSkill3: Skill = {
    Name: "Subdue Threat",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("At 15+ Shield, Coin Power +2"),
        new SkillDescriptionPart("[On Crit] Inflict 1 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ZweiAssociationSouthSection5/SubdueThreat.png'
}

export const ZweiAssocSouthSection5Rodion: Identity = {
    Id: 10906,
    Name: "Zwei Assoc. South Section 5",
    Sinner: SinnerEnum.Rodion,
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
    Skills: [ZweiAssocSouthSection5RodionSkill1, 
            ZweiAssocSouthSection5RodionSkill2, 
            ZweiAssocSouthSection5RodionSkill3, 
            ZweiAssocSouthSection5RodionDefense],
    Passives: [
        new Passive("Defense Breathing",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain 2 Shield per 1 [Poise] Count. (Max 20)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Designated Protection",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, 1 ally with the lowest HP percentage gains 1 Shield per 1 [Poise] Count next turn. (Max 10)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksunginfo.png'
}