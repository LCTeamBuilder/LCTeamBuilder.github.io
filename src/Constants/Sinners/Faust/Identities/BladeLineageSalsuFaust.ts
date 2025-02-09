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

const BladeLineageSalsuFaustDefense: Skill = {
    Name: "Redirect",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] For every 4 [Poise] on self, gain Final Power +1 (Max 5)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/RedirectUT4.png'
}

const BladeLineageSalsuFaustSkill1: Skill = {
    Name: "Moonlit Blade Dance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise], Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain 1 [Poise]", 2),
        new SkillDescriptionPart("[On Crit] Inflict 1 [Red Plum Blossom]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/MoonlitBladeDance.png'
}

const BladeLineageSalsuFaustSkill2: Skill = {
    Name: "Acupuncture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count<br>"+
            "+30% Damage on Critical Hit", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Crit] Inflict 2 [Red Plum Blossom]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/Acupuncture.png'
}

const BladeLineageSalsuFaustSkill3: Skill = {
    Name: "Red Plum Blossoms Scatter",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +3% more damage for every [Red Plum Blossom] on target<br>"+
            "Coin Power +1 for every 7 [Poise] on self (Max 3)<br>"+
            "[Clash Win] Consume half the [Poise] Count on self, then gain [Poise] equal to the [Poise] Count consumed. (Max 10)<br>"+
            "This Skill does not consume [Red Plum Blossom] On Crit"),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/RedPlumBlossomsScatter.png'
}

export const BladeLineageSalsuFaust: Identity = {
    Id: 10208,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.5,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuFaustSkill1, 
            BladeLineageSalsuFaustSkill2, 
            BladeLineageSalsuFaustSkill3, 
            BladeLineageSalsuFaustDefense],
    Passives: [
        new Passive("Sanguine Plum Blossoms",
            PassiveTypeEnum.Combat,
            "On Crit: Inflict 1 [Red Plum Blossom]. If the target has 10 [Red Plum Blossom], inflict 1 [Defense Level Down] instead (6 times max)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Lingering Bladepoint",
            PassiveTypeEnum.Support,
            "When the ally first deployed in the pre-battle team setup Critically hits with a Slash type Skill, inflict 1 [Defense Level Down] (3 times max per 1 enemy per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksung.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/BladeLineageSalsu/10208gacksunginfo.png'
}