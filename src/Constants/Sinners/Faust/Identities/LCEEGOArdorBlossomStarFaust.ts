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

const LCEEGOArdorBlossomStarFaustDefense: Skill = {
    Name: "Resonating by raising A.B.S. Attunement.",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Burn], Coin Power +3<br>"+
            "[On Use] Lose 5 [Burn] (once per turn)<br>"+
            "[On Evade] Lose 5 [Burn] (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCEEGOArdorBlossomStar/ResonatingByRaisingABSAttunementUT4.png"
}

const LCEEGOArdorBlossomStarFaustSkill1: Skill = {
    Name: "Ignition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Burn], deal +10% more damage<br>"+
            "[On Use] Gain 7 [Burn] and +1 [Burn] Count<br>"+
            "[On Use] Coin Power +1 for every 10 ([Burn] on self + [Burn] on the target) (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>"+
            "[On Hit] Gain 2 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>"+
            "[On Hit] At 10+ [Burn], inflict additional 3 [Burn]<br>"+
            "[On Hit] Gain 2 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCEEGOArdorBlossomStar/Ignition.png"
}

const LCEEGOArdorBlossomStarFaustSkill2: Skill = {
    Name: "E.G.O - A.B.S. Activation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +10% more damage for every 10 [Burn] on self (max 20%)<br>"+
            "[On Use] Gain +4 [Burn] Count<br>"+
            "[On Use] Coin Power +1 for every 4 ([Burn] on self + [Burn] on the target) (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit without cracking] Inflict 3 [Burn]<br>"+
            "[On Hit] If the target has 15+ [Burn], inflict +2 [Burn] Count on target", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCEEGOArdorBlossomStar/EGOABSActivation.png"
}

const LCEEGOArdorBlossomStarFaustSkill31: Skill = {
    Name: "Drawn by Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain 7 [Burn] and +1 [Burn] Count<br>"+
            "[Before Use] At 30+ [Burn], activate 'A.B.S. Max Attunement 【Degraded Corrosion】' instead<br>"+
            "[On Use] Deal +12.5% more damage for every 5 [Burn] on self (max 50%)<br>"+
            "[On Use] Base Power +1 for every 10 ([Burn] on self + [Burn] on the target) (max 2)<br>"+
            "[On Use] If this unit is missing 30%+ HP, Coin Power +1 (max 2)"),
            new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCEEGOArdorBlossomStar/DrawnByFlame.png"
}

const LCEEGOArdorBlossomStarFaustSkill32: Skill = {
    Name: "A.B.S. Max Attunement 【Degraded Corrosion】",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("After using this Skill, dies.<br>"+
            "- If HP drops to 1 while using this Skill, maintains HP at 1 for the duration of the Skill.<br>"+
            "[On Use] Deal +12.5% more damage for every 5 [Burn] on self (max 50%)<br>"+
            "[On Use] Base Power +1 for every 10 ([Burn] on self + [Burn] on the target) (max 2)<br>"+
            "[On Use] Coin Power +1 for every 30% missing HP on self (max 3)<br>"+
            "[Before Attack] Atk Weight +1 for every 20% missing HP on self (max 4)"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 4 [Burn]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 4 [Burn]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Deal +10% more damage for every 20% missing HP on self (max 30%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LCEEGOArdorBlossomStar/ABSMaxAttunementDegradedCorrosion.png"
}

export const LCEEGOArdorBlossomStarFaust: Identity = {
    Id: 10211,
    Name: "LCE E.G.O::Ardor Blossom Star",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [LCEEGOArdorBlossomStarFaustSkill1, 
            LCEEGOArdorBlossomStarFaustSkill2, 
            LCEEGOArdorBlossomStarFaustSkill31,  
            LCEEGOArdorBlossomStarFaustSkill32,
            LCEEGOArdorBlossomStarFaustDefense],
    Passives: [
        new Passive("Fireproof",
            PassiveTypeEnum.Combat,
            "Cannot be staggered or fall below 1 HP due to [Burn] damage."),

        new Passive("Flame Moth",
            PassiveTypeEnum.Combat,
            "Combat Start: at 80%+ missing HP, and at less than 30 [Burn], gain up to 30 [Burn] (once per Encounter)<br><br>"+

            "Turn End: Gain 1 [Offense Level Up] next turn for every 6 [Burn] on self (max 5)<br><br>"+

            "On death, activate the following:<br>"+
            "- Inflict 2 [Burn] on all enemies; inflict [Burn] on self between all enemies (max 3 per enemy)<br>"+
            "- Gain 2 E.G.O resource for 2 least-owned E.G.O resources<br><br>"+

            "If this unit died due to the A.B.S. Max Attunement 【Degraded Corrosion】 Skill, enhance the effect:<br>"+
            "- Inflict 3 [Burn] on all enemies; inflict [Burn] on self between all enemies (max 5 per enemy)<br>"+
            "- Gain 2 E.G.O resource for 2 least-owned E.G.O resources<br>"+
            "If this unit had 30+ [Burn], apply 3 [Offense Level Up] to 1 ally that gets Substituted in",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Residual Heat",
            PassiveTypeEnum.Support,
            "When 1 ally with the least SP inflicts [Burn] with a Base Attack Skill's On Hit effect, inflict 2 additional [Burn] (3 times max)<br>"+
            "- If the target the ally is attacking has 30+ [Burn], inflict +1 [Burn] Count instead (3 times max)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/LCEEGOArdorBlossomStar/10211gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/LCEEGOArdorBlossomStar/10211gacksunginfo.png"
}