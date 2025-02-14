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

const TheRingPointillistStudentYiSangDefense: Skill = {
    Name: "Beat the Brush",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every 1 [Bleed] on target (max 10)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/BeatTheBrushUT4.png'
}

const TheRingPointillistStudentYiSangSkill1: Skill = {
    Name: "Paint Over",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 2,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Clash Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict +2 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/PaintOver.png'
}

const TheRingPointillistStudentYiSangSkill2: Skill = {
    Name: "Sanguine Pointillism",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Clash Power +1 for every 3 [Bleed] on target (max 2)<br>"+
        "Coin Power +1 for every 3 [Bleed] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin, +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
        "[On Hit] Inflict +1 [Bleed] Count<br>"+
        "[On Hit] Inflict +3 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/SanguinePointillism.png'
}

const TheRingPointillistStudentYiSangSkill3: Skill = {
    Name: "Hematic Coloring",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Clash Power +1 for every 3 [Bleed] on target (max 2)<br>"+
        "Coin Power +1 for every 3 [Bleed] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count. If the target has 3+ types of negative effects, inflict +2 additional [Bleed] Count<br>"+
        "[On Hit] Inflict +3 Count for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]. If the target has 3+ types of negative effects, inflict 2 additional [Bleed]<br>"+
        "[On Hit] Inflict 2 Potency for 1 of the following effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 3),
        new SkillDescriptionPart(" Deal +25% more damage for every type of negative effect on target (max 125%)<br>"+
        "[After Attack] If the target is Staggered or Defeated, inflict 2 Potency of 1 of the following effects on 2 enemies with the least negative effects: [Burn], [Bleed], [Rupture], [Tremor], or [Sinking]. Effect selected at random.", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/TheRingPointillistStudent/HematicColoring.png'
}

export const TheRingPointillistStudentYiSang: Identity = {
    Id: 10109,
    Name: "The Ring Pointillist Student",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheRingPointillistStudentYiSangSkill1, 
            TheRingPointillistStudentYiSangSkill2, 
            TheRingPointillistStudentYiSangSkill3, 
            TheRingPointillistStudentYiSangDefense],
    Passives: [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Assignment Evaluation",
            PassiveTypeEnum.Combat,
            "On Hit, if the target has 4+ [Bleed], heal 2 SP<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (max 3)<br>"+
            "If this unit's SP is at max, gain 2 [Offense Level Up] next turn when this unit heals SP with this effect.<br>"+
            "(This Passive activates 4 times max per turn)",
            [{ sin: SinEnum.Lust , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Practices on Aesthetics",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 2 SP On Hit for every type of negative effect on the target (max 6)<br>"+
            "If the target has [Bleed], heal 3 additional SP<br>"+
            "(This Passive activates 2 times max per turn)",
            [{ sin: SinEnum.Lust, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/TheRingPointillistStudent/10109gacksunginfo.png'
}