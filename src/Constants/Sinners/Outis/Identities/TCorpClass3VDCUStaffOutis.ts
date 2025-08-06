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

const TCorpClass3VDCUStaffOutisDefense: Skill = {
    Name: "Borrowed Time - Microcavity",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] If this unit is not in a [Borrowed Time] state, gain 4 [Borrowed Time] at Turn End (once per turn)<br>"+
            "[Clash Win] Apply +2 [Tremor] Count to both the target and self<br>"+
            "[Clash Lose] Gain +4 [Tremor] Count"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TCorpClass3VDCUStaff/1111304.png'
}

const TCorpClass3VDCUStaffOutisSkill1: Skill = {
    Name: "Prepare To Collect",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[On Use] If target has 6+ [Tremor], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TCorpClass3VDCUStaff/1111301.png'
}

const TCorpClass3VDCUStaffOutisSkill2: Skill = {
    Name: "T Corp. Microcavity Module",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Tremor] Count <br>"+
            "[On Use] If target has 6+ [Tremor], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] If target has 10+ [Tremor], consume 4 [Tremor] on target to apply +2 [Tremor] Count to both the target and self", 2),
        new SkillDescriptionPart("If target is in either [Amplitude Conversion] or [Amplitude Entanglement] states, this Coin deals +60% damage <br>"+
            "[On Hit] If target isn't in [Amplitude Conversion] or [Amplitude Entanglement] states, consume 3 [Tremor] Count on self to trigger [Amplitude Conversion] into [Tremor - Chain]<br>"+
            "[On Hit] If target has 3+ [Tremor] Count, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TCorpClass3VDCUStaff/1111302.png'
}

const TCorpClass3VDCUStaffOutisSkill3: Skill = {
    Name: "T-3 Collector Mace Max Activation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target is in either [Amplitude Conversion] or [Amplitude Entanglement] states, deal +30% damage<br>"+
            "If target has [Time Moratorium], deal +30% damage<br>"+
            "[On Use] Coin Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] If target has [Bind], Clash Power +1<br>"+
            "[After Attack] Lose [Borrowed Time] on self<br>"+
            "[After Attack] Gain [Violent Collections] (once per Encounter)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count<br>"+
            "[On Hit] Consume up to 3 [Tremor] on target<br>"+
            "- Gain +([Tremor] consumed x 2) [Tremor] Count<br>"+
            "- Inflict ([Tremor] consumed - 1) [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] If target has 3+ [Tremor] Count, trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[Coin Start] Consume all [Tremor] Count on self<br>"+
            "- Coin Power +1 for every 4 [Tremor] Count consumed (max 5)<br>"+
            "- Deal +2% damage for every 1 [Tremor] Count consumed (max 100%)<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If this unit has [Borrowed Time], trigger [Tremor Burst]<br>"+
            "[On Hit] If this unit has [Borrowed Time], inflict 2 [Time Moratorium]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TCorpClass3VDCUStaff/1111303.png'
}

export const TCorpClass3VDCUStaffOutis: Identity = {
    Id: 11113,
    Name: "T Corp. Class 3 VDCU Staff",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [TCorpClass3VDCUStaffOutisSkill1, 
            TCorpClass3VDCUStaffOutisSkill2, 
            TCorpClass3VDCUStaffOutisSkill3, 
            TCorpClass3VDCUStaffOutisDefense],
    Passives: [
        new Passive("Golden Time - Microcavity",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 10% ~ 20%, instantly heal 80% of this unit's max HP, and recover from Stagger. (once per Encounter)<br><br>"+
            
            "If this unit has [Borrowed Time], its Skills gain Final Power +1",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Expeditious Execution of Official Duties",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed deals +10% damage when attacking a Staggered target.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/TCorpClass3VDCUStaff/11113gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/TCorpClass3VDCUStaff/11113gacksunginfo.png'
}