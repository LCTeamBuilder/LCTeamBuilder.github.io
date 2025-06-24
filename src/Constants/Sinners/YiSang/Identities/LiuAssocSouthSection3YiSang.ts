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

const LiuAssocSouthSection3YiSangDefense: Skill = {
    Name: "Flame Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Getting Hit] Gain Shield equal to [Burn] on target (max 15, once per turn)<br>" +
            "[On Use] If target has 10+ [Burn], deal +10% more damage"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Burn]<br>" +
            "- If this unit has Shield, inflict 1 additional [Burn]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Burn]<br>" +
            "- If this unit has Shield, inflict 1 additional [Burn]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LiuAssocSouthSection3/FlameCounter.png'
}

const LiuAssocSouthSection3YiSangSkill1: Skill = {
    Name: "Flame Hew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (max 2)<br>" +
            "Deal +10% damage for every 10 [Burn] on target (max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>" +
            "[Heads Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>" +
            "[Heads Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LiuAssocSouthSection3/FlameHew.png'
}

const LiuAssocSouthSection3YiSangSkill2: Skill = {
    Name: "Frontal Assault",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 2),
        new SkillDescriptionPart("Deal +5% damage for every [Burn] on target (max 60%)<br>" +
            "[On Hit] If target has 6+ [Burn], inflict +2 [Burn] Count on target", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LiuAssocSouthSection3/FrontalAssault.png'
}

const LiuAssocSouthSection3YiSangSkill3: Skill = {
    Name: "Flow of the Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (max 2)<br>" +
            "Deal +10% damage for every 6 [Burn] on target (max 30%)<br>" +
            "[After Attack] Heal 15 SP for 1 other ally with the least SP<br>" +
            "- If this attack killed the target, or if target had 10+ [Burn], heal 1 more ally"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 3),
        new SkillDescriptionPart("Deal +2% damage for every [Burn] on target (max 60%)<br>" +
            "[On Hit] Inflict Wrath Affinity damage equal to [Burn] Potency on target. (max 30) Reduce Target's [Burn] Count by 2", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LiuAssocSouthSection3/FlowOfTheSword.png'
}

export const LiuAssocSouthSection3YiSang: Identity = {
    Id: 10112,
    Name: "Liu Assoc. South Section 3",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +2,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection3YiSangSkill1, 
            LiuAssocSouthSection3YiSangSkill2, 
            LiuAssocSouthSection3YiSangSkill3, 
            LiuAssocSouthSection3YiSangDefense],
    Passives: [
        new Passive("Inner Ardor",
            PassiveTypeEnum.Combat,
            "Turn End: heal 1 ally with the least SP by (5 + highest Reson.) (max 10) (excludes: self and Panicked or E.G.O Corroded allies)<br>" +
            "- If the said ally has Base Skills that inflict [Burn] Potency or Count, heal 5 additional SP to them<br>" +
            "- At 4+ Wrath Reson., heal 1 additional ally",
            [{ sin: SinEnum.Wrath, amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Liu Defensive Square",
            PassiveTypeEnum.Support,
            "For 2 allies with the least SP: if they lost SP this turn, heal 5 SP at Turn End<br>" +
            "- If the said allies have Base Skills that inflict [Burn] Potency or Count, heal 5~10 SP instead",
            [{ sin: SinEnum.Wrath, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/LiuAssocSouthSection3/10112gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/LiuAssocSouthSection3/10112gacksunginfo.png'
}