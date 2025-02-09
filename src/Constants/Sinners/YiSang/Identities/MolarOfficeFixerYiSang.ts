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

const MolarOfficeFixerYiSangDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/GuardUT4.png'
}

const MolarOfficeFixerYiSangSkill1: Skill = {
    Name: "Stay Calm",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "At 5+ [Tremor] Count, gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/StayCalm.png'
}

const MolarOfficeFixerYiSangSkill2: Skill = {
    Name: "Gamble",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] At 5+ [Tremor] Count, trigger [Tremor Burst]. Reduce target's [Tremor] Count by 2", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/Gamble.png'
}

const MolarOfficeFixerYiSangSkill3: Skill = {
    Name: "Grinding the Molars",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 Tremor<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Level Down]<br>"+
            "If the Skill spent [Tremor] Count, trigger [Tremor Burst]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/MolarOfficeFixer/GrindingTheMolars.png'
}

export const MolarOfficeFixerYiSang: Identity = {
    Id: 10105,
    Name: "Molar Office Fixer",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarOfficeFixerYiSangSkill1, 
            MolarOfficeFixerYiSangSkill2, 
            MolarOfficeFixerYiSangSkill3, 
            MolarOfficeFixerYiSangDefense],
    Passives: [
        new Passive("In Times Like These...",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 5 per 1 enemy every turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Up the Mess",
            PassiveTypeEnum.Support,
            "When 1 ally with the lowest Max HP triggers [Tremor Burst] on an enemy, inflict 1 [Defense Level Down] per 4 Stagger Threshold raised (Max 3 per 1 enemy every turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/MolarOfficeFixer/10105gacksunginfo.png'
}