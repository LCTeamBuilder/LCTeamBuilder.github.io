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

const WutheringHeightsButlerFaustDefense: Skill = {
    Name: "Hunting Plans",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 10+ [Sinking], Coin Power +7")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/HuntingPlansUT4.png'
}

const WutheringHeightsButlerFaustSkill1: Skill = {
    Name: "Confiscation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/Confiscation.png'
}

const WutheringHeightsButlerFaustSkill2: Skill = {
    Name: "Interloper Reception",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 5+ [Sinking], Clash Power +1<br>"+
            "[On Use] If the target has 3+ [Sinking] Count, Coin Power +1", 2),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/InterloperReception.png'
}

const WutheringHeightsButlerFaustSkill3: Skill = {
    Name: "Reception Arts 4: Heartseal",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 5+ [Sinking] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict +3 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/ReceptionArts4Heartseal.png'
}

export const WutheringHeightsButlerFaust: Identity = {
    Id: 10209,
    Name: "Wuthering Heights Butler",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WutheringHeightsButlerFaustSkill1, 
            WutheringHeightsButlerFaustSkill2, 
            WutheringHeightsButlerFaustSkill3, 
            WutheringHeightsButlerFaustDefense],
    Passives: [
        new Passive("Butler Style Response",
            PassiveTypeEnum.Combat,
            "- Clash Win: inflict 1 [Sinking] on target (3 times per turn)<br>"+
            "- If the target has [Echoes of the Manor], inflict 3 [Sinking] instead",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Anticipatory Training",
            PassiveTypeEnum.Support,
            "When 1 ally with the least SP hits an enemy with 5+ [Sinking], the ally heals 3 SP On Hit (4 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksung.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/WutheringHeightsButler/10209gacksunginfo.png'
}