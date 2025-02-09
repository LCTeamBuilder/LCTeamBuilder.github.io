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

const WutheringHeightsChiefButlerOutisDefense: Skill = {
    Name: "Insolent Fool...!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Inflict 1 [Sinking] (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/InsolentFoolUT4.png'
}

const WutheringHeightsChiefButlerOutisSkill1: Skill = {
    Name: "Knocking",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 5+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/Knocking.png'
}

const WutheringHeightsChiefButlerOutisSkill2: Skill = {
    Name: "Dusting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 5+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/Dusting.png'
}

const WutheringHeightsChiefButlerOutisSkill3: Skill = {
    Name: "As Mistress Commands",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 7+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +3 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict Gloom Affinity damage equal to [Sinking] Potency on target (Max 30)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/AsMistressCommands.png'
}

export const WutheringHeightsChiefButlerOutis: Identity = {
    Id: 11108,
    Name: "Wuthering Heights Chief Butler",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WutheringHeightsChiefButlerOutisSkill1, 
            WutheringHeightsChiefButlerOutisSkill2, 
            WutheringHeightsChiefButlerOutisSkill3, 
            WutheringHeightsChiefButlerOutisDefense],
    Passives: [
        new Passive("The Mistress' Voice...!",
            PassiveTypeEnum.Combat,
            "- When clashing against targets with less than 0 SP, Clash Power +1 and deal +20% more damage<br>"+
            "- Deal +30% more damage against targets with [Echoes of the Manor]<br>"+
            "- When winning a Clash without losing a single Coin, heal 10 SP. If this unit is already at max SP, gain 3 [Offense Level Up] next turn (2 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Butler Training",
            PassiveTypeEnum.Support,
            "Clash Power +1 to 1 ally with the most SP when clashing against targets with less than -25 SP",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/WutheringHeightsChiefButler/11108gacksunginfo.png'
}