<script setup>
const config = useAppConfig()
const { open } = useContactModal()
</script>

<template>
  <aside
    absolute
    lg:relative
    lg:inset-y-none
    flex
    flex-col
    flex-none
    overflow-y-auto
    transition
    duration-200
    ease-in-out
    w-58
    xl:w-70
    z-auto
  >
    <div flex-1 space-y-6 h-full p-3>
      <div flex flex-col gap-2>
        <div flex flex-col justify-center p-2>
          <div flex flex-none items-center justify-between>
            <span flex items-center space-x-3>
              <h2 text-lg font-semibold tracking-wide line-clamp-1>
                {{ config.name }}
              </h2>
            </span>
          </div>
        </div>

        <nav flex flex-col gap-6>
          <SidebarSection>
            <SidebarNavLink icon="House" href="/">
              Recents
            </SidebarNavLink>
            <SidebarNavLink icon="User" href="/about">
              About
            </SidebarNavLink>
            <SidebarNavLink icon="Code" href="/projects">
              Projects
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Resources">
            <SidebarNavLink icon="Stack" href="/stack">
              Stack
            </SidebarNavLink>
            <SidebarNavLink icon="Bookmark" href="/bookmarks">
              Bookmarks
            </SidebarNavLink>
            <SidebarNavLink icon="Notes" href="/notes">
              Notes
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Stay in touch">
            <SidebarNavLink
              component="button"
              icon="Chat"
              cursor-pointer
              text-left
              @click.prevent="open"
            >
              Contact
            </SidebarNavLink>
            <SidebarNavLink
              icon="Twitter"
              external
              to="https://twitter.com/mattgaunt"
              target="_blank"
            >
              Twitter
            </SidebarNavLink>
            <SidebarNavLink
              icon="Polywork"
              external
              to="https://polywork.com/mattgaunt"
              target="_blank"
            >
              Polywork
            </SidebarNavLink>
            <SidebarNavLink
              icon="Github"
              external
              to="https://github.com/mattgaunt"
              target="_blank"
            >
              GitHub
            </SidebarNavLink>
          </SidebarSection>
        </nav>
      </div>
    </div>
  </aside>
</template>
