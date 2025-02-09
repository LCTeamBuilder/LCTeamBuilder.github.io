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

const DeadRabbitsBossMeursaultDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +24,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/Counter.png'
}

const DeadRabbitsBossMeursaultSkill1: Skill = {
    Name: "Bat Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/BatStrike.png'
}

const DeadRabbitsBossMeursaultSkill2: Skill = {
    Name: "Smackdown",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 6+ [Rupture], Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 4+ [Rupture], inflict 2 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/Smackdown.png'
}

const DeadRabbitsBossMeursaultSkill3: Skill = {
    Name: "Relentless",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 3+ [Rupture], Clash Power +1<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1<br>"+
            "[Clash Win] Inflict 2 [Offense Level Down]"), 
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 4+ [Rupture], inflict 2 [Offense Level Down] next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/Relentless.png'
}

export const DeadRabbitsBossMeursault: Identity = {
    Id: 10509,
    Name: "Dead Rabbits Boss",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DeadRabbitsBossMeursaultSkill1, 
            DeadRabbitsBossMeursaultSkill2, 
            DeadRabbitsBossMeursaultSkill3, 
            DeadRabbitsBossMeursaultDefense],
    Passives: [
        new Passive("Buy Time",
            PassiveTypeEnum.Combat,
            "Clash Power +1 against targets with [Rupture]<br>"+
            "Clash Power +2 if target has 5+ [Rupture] Count",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("My Responsibility",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits an enemy with 3+ [Rupture], inflict 1 [Offense Level Down] (3 times per enemy per turn)",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksunginfo.png'
}