import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch, Layout } from 'antd'
import { withI18n, Trans } from '@lingui/react'
import ScrollBar from '../ScrollBar'
import { config } from 'utils'
import SiderMenu from './Menu'
import styles from './Sider.less'

@withI18n()
class Sider extends PureComponent {
  render() {
    const {
      i18n,
      menus,
      theme,
      isMobile,
      collapsed,
      onThemeChange,
      onCollapseChange,
    } = this.props

    return (
      <Layout.Sider
        width={256}
        theme={theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={isMobile ? null : onCollapseChange}
        className={styles.sider}
      >
        <div className={styles.brand}>
          {collapsed ? (
            <div className={styles.logoSmall}>
              <img
                alt="logo"
                style={{ width: 40, height: 40 }}
                src={config.smallLogoPath}
              />
            </div>
          ) : (
            <div className={styles.logo}>
              <img alt="logo" src={config.logoPath} />
            </div>
          )}
        </div>

        <div className={styles.menuContainer}>
          <ScrollBar
            option={{
              // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
              suppressScrollX: true,
            }}
          >
            <SiderMenu
              menus={menus}
              theme={theme}
              isMobile={isMobile}
              collapsed={collapsed}
              onCollapseChange={onCollapseChange}
            />
          </ScrollBar>
        </div>
        {collapsed ? null : <div className={styles.switchTheme} />}
      </Layout.Sider>
    )
  }
}

Sider.propTypes = {
  menus: PropTypes.array,
  theme: PropTypes.string,
  isMobile: PropTypes.bool,
  collapsed: PropTypes.bool,
  onThemeChange: PropTypes.func,
  onCollapseChange: PropTypes.func,
}

export default Sider
