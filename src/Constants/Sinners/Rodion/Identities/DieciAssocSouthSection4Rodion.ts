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

const DieciAssocSouthSection4RodionDefense: Skill = {
    Name: "Fixated Study",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] the Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/FixatedStudyUT4.png'
}

const DieciAssocSouthSection4RodionSkill1: Skill = {
    Name: "Illuminate Thy Vacuity",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 5% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] If [Insight] is 2 or higher, gain Coin Power by ([Insight] -1)"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 10", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/IlluminateThyVacuity.png'
}

const DieciAssocSouthSection4RodionSkill2: Skill = {
    Name: "Weight of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 10% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] the Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 5+ [Sinking], gain Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 5 Sinking", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/WeightOfKnowledge.png'
}

const DieciAssocSouthSection4RodionSkill3: Skill = {
    Name: "Excruciating Study",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 20% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 2 Skills of the lowest ranks in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 7+ [Sinking], gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/ExcruciatingStudy.png'
}

export const DieciAssocSouthSection4Rodion: Identity = {
    Id: 10907,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 88,
    HealthPerLevel: 3.1,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4RodionSkill1, 
            DieciAssocSouthSection4RodionSkill2, 
            DieciAssocSouthSection4RodionSkill3, 
            DieciAssocSouthSection4RodionDefense],
    Passives: [
        new Passive("Incandescent Enlightenment",
            PassiveTypeEnum.Combat,
            "Gain [Blunt DMG Up] next turn based on the damage that this unit took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 25% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 5)<br>"+
            "If this unit has 3 [Insight] at the end of the turn, remove 1 negative effect applied to self",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Missionary of Knowledge",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains [Blunt DMG Up] next turn based on the damage that they took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 15% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 3)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksunginfo.png'
}