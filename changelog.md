# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [Unreleased] - Unreleased

## [1.10.1] - 2021-06-03
### Fixed
- Fix editor padding for group and cover block fixed

### Added
- Add filter to remove not-used blocks from the block editor

### Changed
- Change to wp core jquery from custom enqueued version
- Disable all emoji related functions

### Fixed
- Fix quantity increase not working above 10 items

## [1.10.0] - 2021-03-22
### Added
- Add `composer install` to pipeline
- Add Intelephense to VS Code extenstions

### Changed
- Update docker image to GitLab PHP 7.4
- Change prod and staging pipelines to branch pipelines

### Removed
- Remove FontAwesome from start kit becuase of size
- Remove custom full-screen style from Cover block

## [1.9.1] - 2021-02-10
### Added
- Add theme support to disable editor gradient controls

### Fixed
- Fix orphant remove_actions in woocommerce functions
- Fix js error in cover block responsive overlay

## [1.9.0] - 2021-02-04
### Added
- Add new wp_body_open function
- Improve header markdown
- Improve page wrapper IDs

### Fixed
- Fix PHP error when WooCommerce is disabled
- Fix "skip to content" anchor link
- Replace ID selectors used in CSS

### Docs
- Update todo list in readme
- Update build step in readme

## [1.8.3] - 2021-02-03
### Fixed
- Fix namespace in block styles file
- Fix typo in theme setup search-replace step

## [1.8.2] - 2021-02-03
### Fixed
- Fix theme details in style.css
- Improve docs about wpackio auto load

## [1.8.1] - 2021-02-03
### Added
- Add setup instructions for name replacements

### Fixed
- Wrong appName in auto load function

## [1.8.0] - 2021-02-03
### Fixed
- Fix PHPCS errors
- Fix @subpackage name in all files

### Changed
- Change PHPCS variable alignment setting

### Remove
- Remove PHPCS ignore around $content-width
- Remove skip-link-focus-fix JS
- Remove an unnecessary ARIA role

## [1.7.2] - 2021-01-20
### Fixed
- Disable formatOnSave in VS code

## [1.7.1] - 2021-01-19
### Fixed
- Replace workspace file with `.vscode` folder

## [1.7.0] - 2021-01-18
### Add
- Add VS Code workspace file with default config

## [1.6.1] - 2021-01-18
### Fixed
- Fix PHPCS executable path not working on windows

## [1.6.0] - 2020-12-30
### Add
- Add PHPCS to lint-stage, calling it on commit

## [1.5.0] - 2020-11-23
### Added
- Add site icon in footer with site logo as fallback
- Add CommitLint with Conventional Commit config

### Fixed
- Update composer dependancies

### Removed
- Remove old TOC from style.css

## [1.4.1] - 2020-11-14
### Fixed
- Update node dependencies.
- Lint package.json

### Removed
- Remove node-sass dependency - it's still included by other packages.

## [1.4.0] - 2020-11-12
### Added
- Add BB pipeline config for deploy to prod and staging
- Add @wordpress-scripts package for Linting and Formating
- Add ESLint config
- Add trigger for ESLint on commit hook

### Changed
- Changed code indentaion to tab
- Foramt all SCSS according to WP Coding Standards
- Foramt all JS according to WP Coding Standards

## [1.3.0] - 2020-11-09
### Added
- Add sidebar to woocommerce pages.

### Fixed
- Fix text-domain in PHPCS config
- Run Composer update

### Changed
- Move all hooks and filters to top of files.

## [1.2.0] - 2020-11-06
### Changed
- Updated all NPM pagckages

### Fixed
- Fix all CSS errors reported by stylelint
- Fix theme function prefixes
- Fix wrong theme text domain 

### Removed
- Remove duplicate .editorconfig in theme folder.

## [1.1.0] - 2020-11-04
### Added
- Add stylelint with bootstrap rules
- Add lint-staged and husky
- Add config for running stylelint on git pre-commit

### Changed
- Update author in composer file
- Change .editorconfig indent to spaces


## [1.0.2] - 2020-09-04
### Added
- PHP Codesniffer and dependancies
- Generate .pot file composer script

### Fixed
- Text domain

## [1.0.1] - 2020-04-10
### Fixed
- Update Readme.

## [1.0.0] - 2020-04-10
### Fixed
- Updated Readme file with setup instructions
- Fix block spacing class name overwrites

### Added
- Changelog
- Coverblock overlay extension
- WooCommerce mini cart (slide-in)

### Removed
- Remove the test block Product slide-scroller from starting point
- Remove cart animations from starting point
- Remove some old not-used WooCommerce functions

## [0.1.0] - 2020-03-11
### Added
- Initial WordPress project starting point:
- _s theme
- Bootstrap
- WPack.io
- Block Editor basic functions
- WooCommerce basic functions
