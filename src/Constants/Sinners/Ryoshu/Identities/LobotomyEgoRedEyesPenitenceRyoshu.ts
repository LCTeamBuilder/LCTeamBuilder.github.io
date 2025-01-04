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

const LobotomyEgoRedEyesPenitenceRyoshuDefense: Skill = {
    Name: "Mealtime, Bedtime",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes] (once per turn)<br>"+
            "- At less than 7 [Red Eyes], gain +1 additional [Red Eyes]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Penitence] (once per turn)<br>"+
            "- At less than 7 [Penitence], gain +1 additional [Penitence]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041004.png"
}

const LobotomyEgoRedEyesPenitenceRyoshuSkill1: Skill = {
    Name: "Both of You, Shut Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Red Eyes], Coin Power +1<br>"+
            "At 7+ [Penitence], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Penitence]<br>"+
            "[Heads Hit] Gain 1 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041001.png"
}

const LobotomyEgoRedEyesPenitenceRyoshuSkill2: Skill = {
    Name: "S.H. / S.F.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of [Red Eyes] and [Penitence] is 15 or higher, Coin Power +1<br>"+
            "If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Red Eyes]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Gain [Red Eyes] equal to ([Bleed] on target/2) (max 3)<br>"+
            "[Heads Hit] At 7+ [Red Eyes], gain 1 [Haste] next turn (2 times per turn)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041002.png"
}

const LobotomyEgoRedEyesPenitenceRyoshuSkill3: Skill = {
    Name: "Skullbuster",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Use] If [Red Eyes] and [Penitence] are both at 15+, activate 'Serious Skullbuster' instead<br>"+
            "If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] At max SP, gain Clash Power +2 and Coin Power +1<br>"+
            "- [After Attack] If this effect activated, lose 15 SP"),
        new SkillDescriptionPart("[On Hit] Gain 7 [Red Eyes]<br>"+
            "[On Hit] Gain 7 [Penitence]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Penitence]", 2),
        new SkillDescriptionPart("[On Hit] Heal self and 1 ally with the lowest HP percentage by ([Penitence]/2)% of each unit's max HP<br>"+
            "[On Hit] Heal self and 1 ally with the least SP by ([Penitence] - 10) SP (min 0)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041003.png"
}

const LobotomyEgoRedEyesPenitenceRyoshuSkill4: Skill = {
    Name: "Serious Skullbuster",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume all [Red Eyes] and [Penitence] on self<br>"+
            "- Coin Power +1 for every 5 [Red Eyes] consumed (max 4)<br>"+
            "- Base Power +1 for every 5 [Penitence] consumed (max 4)<br>"+
            "[After Attack] Lose 15 SP and gain Only Ashes Remain next turn"),
        new SkillDescriptionPart("[On Hit] Inflict [Bleed] equal to ([Red Eyes] consumed - 15) on target (max 5)", 1),
        new SkillDescriptionPart("Deal +4% more damage for every [Red Eyes] and [Penitence] consumed (max 160%)<br>"+
            "[On Hit] Heal self and 1 ally with the lowest HP percentage by ([Penitence] consumed)% of each unit's Max HP<br>"+
            "- Heal 1 additional ally for every 2 highest Reson. (max 2 more allies)<br>"+
            "[On Hit] Heal self and 1 ally with the least SP by ([Penitence] consumed - 5) SP<br>"+
            "- Heal 1 additional ally for every 2 highest Reson. (max 2 more allies)<br>"+
            "[On Hit] Inflict 3 [Bind] and 2 [Attack Power Down] next turn (once per turn)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041005.png"
}

export const LobotomyEgoRedEyesPenitenceRyoshu: Identity = {
    Id: 10410,
    Name: "Lobotomy E.G.O:: Red Eyes & Penitence",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.34,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoRedEyesPenitenceRyoshuSkill1, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill2, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill3, 
            LobotomyEgoRedEyesPenitenceRyoshuSkill4, 
            LobotomyEgoRedEyesPenitenceRyoshuDefense],
    Passives: [
        new Passive("E.G.O Assimilation",
            PassiveTypeEnum.Combat,
            "When gaining [Charge] Count, gain [Red Eyes] or [Penitence] instead<br>"+
            "- [Red Eyes] and [Penitence] are unaffected by [Charge] Potency"),

        new Passive("Spiderhead / Skullface",
            PassiveTypeEnum.Combat,
            "When hitting an enemy with a Coin that gains [Red Eyes]:<br>"+
            "- Deal +([Red Eyes]/2)% more damage<br>"+
            "- If this unit's Speed is faster than the target's by 3 or more, deal an additional +([Red Eyes]/2)% more damage<br>"+
            "- If the target has [Bleed], gain 1 [Red Eyes] (3 times per turn)<br><br>"+

            "When hitting an enemy with a Coin that gains [Penitence]:<br>"+
            "- Deal +([Penitence]/2)% more damage<br>"+
            "- If the target's SP is lower than this unit's, deal an additional +([Penitence]/2)% more damage(targets without SP: their SP counts as 0)<br>"+
            "- At 20+ SP, gain 1 [Penitence] (3 times per turn)<br><br>"+

            "When hit by an enemy, gain 1 [Penitence] (max 3)",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Eat and Sleep",
            PassiveTypeEnum.Support,
            "Combat Start:<br>"+
            "- 1 ally with the lowest HP percentage heals 3 HP<br>"+
            "- 1 ally with the least SP heals 3 SP",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LobotomyEGORedEyesPenitence/10410gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LobotomyEGORedEyesPenitence/10410gacksunginfo.png"
}