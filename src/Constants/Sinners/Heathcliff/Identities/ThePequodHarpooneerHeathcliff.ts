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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const ThePequodHarpooneerHeathcliffDefense: Skill = {
    Name: "Payback",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[Combat Start] Gain [Defense Level Up] for every [Poise] on self (Max 10)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/PaybackUT4.png"
}

const ThePequodHarpooneerHeathcliffSkill1: Skill = {
    Name: "Stalk Prey",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Poise] count<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/StalkPrey.png"
}

const ThePequodHarpooneerHeathcliffSkill2: Skill = {
    Name: "Snagharpoon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Poise] for every 3 [Bleed] on target (Max 10)"),
        new SkillDescriptionPart("[On Crit] Inflict [Bleed] Count equal to 1/3 of [Bleed] Potency on target (Max 10)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/Snagharpoon.png"
}

const ThePequodHarpooneerHeathcliffSkill3: Skill = {
    Name: "Sever Knot",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 3+ Envy Reson., Clash Power +1<br>"+
            "At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/SeverKnot.png"
}

export const ThePequodHarpooneerHeathcliff: Identity = {
    Id: 10707,
    Name: "The Pequod Harpooneer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ThePequodHarpooneerHeathcliffSkill1, 
            ThePequodHarpooneerHeathcliffSkill2, 
            ThePequodHarpooneerHeathcliffSkill3, 
            ThePequodHarpooneerHeathcliffDefense],
    Passives: [
        new Passive("Mutilated Tattoos",
            PassiveTypeEnum.Combat,
            "Gain 1 [Offense Level Up] and 1 [Defense Level Up] next turn every time an ally (including this unit) is attacked. Gain 2 of each instead if the ally is from The Pequod. (Max 9)<br>"+
            "Deal more damage the less HP this unit has.<br>"+
            "- Deal 1% more damage for every 1% missing HP",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Desperation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP deals more Pierce Damage at less HP<br>"+
            "- Deal 0.3% more damage for every 1% missing HP (Max 30%)",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/ThePequodHarpooneer/10707gacksunginfo.png"
}