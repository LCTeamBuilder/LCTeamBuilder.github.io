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

const TheBarberOfLaManchalandOutisDefense: Skill = {
    Name: "Quite Discourteous!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Blood-tinged Scissorblades], Base Power +1<br>"+
            "- At 20+ [Blood-tinged Scissorblades], Base Power +2 instead"),
        new SkillDescriptionPart("[On Use] Coin Power +1 for every 5 [Bleed] on self (max 3)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/QuiteDiscourteous.png'
}

const TheBarberOfLaManchalandOutisSkill1: Skill = {
    Name: "Sewing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 10% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 40 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 8 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain +2 [Bleed] Count<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Sewing.png'
}

const TheBarberOfLaManchalandOutisSkill2: Skill = {
    Name: "Scission",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 20% of the HP damage dealt (max 20)<br>"+
            "[On Use] Consume up to 60 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 6 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sewing Target] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Scission.png'
}

const TheBarberOfLaManchalandOutisSkill3: Skill = {
    Name: "I'll Make You a New Dress!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 20)<br>"+
"[Before Attack] At 10+ [Blood-tinged Scissorblades], Atk Weight +1<br>"+
"- At 20+ [Blood-tinged Scissorblades], replace the above effect with Atk Weight +2 instead<br>"+
"[On Use] If the target has 5+ [Bleed], Coin Power +1<br>"+
"[On Use] Clash Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
"[After Attack] Consume 10 [Blood-tinged Scissorblades] for every Atk Weight gained<br>"+
"[After Attack] If the target is killed, increase [Bloodfeast] by 20. Regain half of [Blood-tinged Scissorblades] consumed by this Skill (once per turn)<br>"+
"- If the target is [Sewing Target], additionally increase [Bloodfeast] by 20 and gain 5 [Blood-tinged Scissorblades] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] At 10+ [Blood-tinged Scissorblades], deal +([Blood-tinged Scissorblades] x 3)% more damage (max 57%)<br>"+
"- At 20+ [Blood-tinged Scissorblades], deal +([Blood-tinged Scissorblades] x 4)% more damage instead (max 120%)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/IllMakeYouANewDress.png'
}

export const TheBarberOfLaManchalandOutis: Identity = {
    Id: 11111,
    Name: "The Barber of La Manchaland",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.23,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [TheBarberOfLaManchalandOutisSkill1, 
            TheBarberOfLaManchalandOutisSkill2, 
            TheBarberOfLaManchalandOutisSkill3, 
            TheBarberOfLaManchalandOutisDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            'If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>'+
            'When this unit enters the field, the sleeping blood drenching the battlefield will surface.'),

        new Passive("WRONG COSTUME!!!",
            PassiveTypeEnum.Combat,
            'In a Clash against [Sewing Target], Clash Power +1<br>'+
            'On Hit, deal +1.5% more damage for every 10 [Bloodfeast Consumed] by self (max 30%)<br>'+
            'On Hit, deal +0.5% more damage for every [Bleed] on the target (max 10%)',
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Don Quixote Hardblood Arts 8: Scissors",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed: if the enemy is killed After Attack, heal 10 HP (2 times per turn)<br>'+
            '1 ally with the fastest Speed: if the enemy is killed After Attack, inflict +1 [Bleed] Count when inflicting [Bleed] Potency with Skill or Coin effects for the next turn (3 times per turn)',
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/TheBarberOfLaManchaland/11111gacksunginfo.png'
}