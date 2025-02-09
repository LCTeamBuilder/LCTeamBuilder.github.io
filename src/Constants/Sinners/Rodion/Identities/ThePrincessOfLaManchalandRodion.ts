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

const ThePrincessOfLaManchalandRodionDefense: Skill = {
    Name: "Don Quixote Hardblood Arts 15: Parasol",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[On Use] Reduce [Bleed] Count by 3 for 2 other allies with the highest ([Bleed] Potency x Count) value, and increase [Bloodfeast] by (pre-reduction [Bleed] Potency x Count reduced)<br>"+
            "- If this effect reduced [Bleed] Count to 0, [Bleed] expires<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, reduce their [Bleed] Count by 2 more<br>"+
            "[Clash Win] Gain 4 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/DonQuixoteHardbloodArts15Parasol.png'
}

const ThePrincessOfLaManchalandRodionSkill1: Skill = {
    Name: "Begone…",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the highest max HP: consume up to 20 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed<br>"+
            "- Prioritizes &ltBloodfiend&gt allies<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, this unit applies 1 additional [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/Begone.png'
}

const ThePrincessOfLaManchalandRodionSkill2: Skill = {
    Name: "In Finely Ground Mistfall",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the least max HP: apply 1 [Attack Power Up], consume up to 30 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed (2 times per turn)<br>"+
            "- Prioritizes &ltBloodfiend&gt allies<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, this unit applies additional 1 [Attack Power Up] and 2 [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/InFinelyGroundMistfall.png'
}

const ThePrincessOfLaManchalandRodionSkill3: Skill = {
    Name: "The Festival Will End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Use] At 25+ [Blooming Thorn], activate 'Ascendant Don Quixote Hardblood Arts - The Finale' instead<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (3 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 3 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/TheFestivalWillEnd.png'
}

const ThePrincessOfLaManchalandRodionSkill4: Skill = {
    Name: "Ascendant Don Quixote Hardblood Arts - The Finale",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (5 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 5 [Blooming Thorn]<br>"+
            "[On Use] Deal +1% more damage for every 5 [Bloodfeast Consumed] by this unit (max 50%)<br>"+
            "[After Attack] Consume all [Blooming Thorn] on self"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/AscendantDonQuixoteHardbloodArtsTheFinale.png'
}

export const ThePrincessOfLaManchalandRodion: Identity = {
    Id: 10911,
    Name: "The Princess of La Manchaland",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +3,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [ThePrincessOfLaManchalandRodionSkill1, 
            ThePrincessOfLaManchalandRodionSkill2, 
            ThePrincessOfLaManchalandRodionSkill3, 
            ThePrincessOfLaManchalandRodionSkill4, 
            ThePrincessOfLaManchalandRodionDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will rise above the surface."),

        new Passive("Hardblood Thorn",
            PassiveTypeEnum.Combat,
            "When another ally takes [Bleed] damage or consumes [Bloodfeast], this unit gains 1 [Blooming Thorn] (5 times per turn)<br>"+
            "Heal HP on self by 20% of the damage dealt with base Skills (max 10 per Skill)<br>"+
            "- At max HP, heal 1 ally with the lowest HP percentage by excess healing",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive('"Blossom with Blood…"',
            PassiveTypeEnum.Support,
            "To 1 ally with the highest [Bleed] Potency at Turn End: reduce the ally's [Bleed] Potency by 6 max, and apply ([Bleed] Potency reduced / 2) [Blooming Thorn] (rounded down)",
            [{ sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/ThePrincessOfLaManchaland/10911gacksunginfo.png'
}