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

const LobotomyCorpRemnantFaustDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LobotomyCorpRemnant/EvadeUT4.png'
}

const LobotomyCorpRemnantFaustSkill1: Skill = {
    Name: "Sole Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LobotomyCorpRemnant/SoleStrike.png'
}

const LobotomyCorpRemnantFaustSkill2: Skill = {
    Name: "Deep Cuts",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Poise] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain 4 [Haste] next turn<br>"+
            "[On Hit] Gain 1 [Poise] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LobotomyCorpRemnant/DeepCuts.png'
}

const LobotomyCorpRemnantFaustSkill3: Skill = {
    Name: "Opportunistic Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If user took no damage last turn, Coin Power +3"),
        new SkillDescriptionPart("[Heads Hit] Inflict 5 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LobotomyCorpRemnant/OpportunisticSlash.png'
}

export const LobotomyCorpRemnantFaust: Identity = {
    Id: 10203,
    Name: "Lobotomy Corp. Remnant",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyCorpRemnantFaustSkill1, 
            LobotomyCorpRemnantFaustSkill2, 
            LobotomyCorpRemnantFaustSkill3, 
            LobotomyCorpRemnantFaustDefense],
    Passives: [
        new Passive("Resolution",
            PassiveTypeEnum.Combat,
            "At the start of the turn, if at 4+ [Poise] Count, gain 2 [Haste].",
            [{ sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Backing",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +2 defense skill final Power.",
            [{ sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksung.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksunginfo.png'
}